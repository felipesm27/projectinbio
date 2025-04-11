import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o Plano</h2>
      <div className="flex gap-4">
        <Button>R$9,99 / mês</Button>
        <Button>R$99,99 Vitalício</Button>
      </div>
    </div>
  );
}
