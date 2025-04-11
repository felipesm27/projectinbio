type PricingCardProps = {
  title: string;
  price: string;
  priceSuffix?: string;
  children?: React.ReactNode;
};

export default function PricingCard({
  title,
  price,
  priceSuffix = "/mês",
  children,
}: PricingCardProps) {
  return (
    <div className="w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1E1E1E]">
      <div className="flex flex-col">
        <span className="text-white font-bold text-2xl">{title}</span>
        <span className="text-content-body">Apenas</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-[48px]">{price}</span>
        <span className="text-content-headline text-2xl">{priceSuffix}</span>
      </div>
      {children}
    </div>
  );
}
