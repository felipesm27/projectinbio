import { TRIAL_DAYS } from "@/app/lib/config";
import Button from "@/app/components/ui/Button";
import PricingCard from "./PrincingCard";
import RecommendedPricingCard from "./RecommendedPricingCard";

export default function Pricing() {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14 border border-border-primary pt-20 pb-20 rounded-2xl">
      {/* Título e descrição */}
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">
          Um valor acessível para todos
        </h3>
        <p className="text-content-body text-xl text-center">
          Junte-se à comunidade de criadores profissionais que já estão elevando
          sua <br />
          presença online. Teste gratuitamente por{" "}
          <strong className="text-accent-pink">{TRIAL_DAYS} dias</strong>, sem
          compromisso!
        </p>
      </div>

      {/* Planos */}
      <div className="flex items-end gap-9">
        <PricingCard title="Mensal" price="R$9,99">
          <Button variant="secondary">Assinar</Button>
        </PricingCard>

        <RecommendedPricingCard title="Vitalício" price="R$99,99">
          <Button variant="secondary">Assinar</Button>
        </RecommendedPricingCard>
      </div>
    </div>
  );
}
