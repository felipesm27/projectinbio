type RecommendedPricingCardProps = {
  title: string;
  price: string;
  children?: React.ReactNode;
};

export default function RecommendedPricingCard({
  title,
  price,
  children,
}: RecommendedPricingCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center rounded-t-2xl p-2 w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
        <span className="uppercase text-xs font-bold text-white">
          Recomendado
        </span>
      </div>
      <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
        <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl">{title}</span>
            <span className="text-content-body">Economize com</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-[48px]">{price}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
