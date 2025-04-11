import Button from "../ui/Button";

export default function Header() {
  return (
    <div
      className="absolute top-0 left-0 right-0
  max-w-7xl mx-auto flex items-center justify-between
  py-10 
  "
    >
      <div className="flex gap-4 items-center">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold ">Project.in.Bio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Pagina</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
}
