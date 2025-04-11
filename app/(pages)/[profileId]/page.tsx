import ProjectCard from "@/app/components/commons/Project-Card";
import { TotalVisits } from "@/app/components/commons/Total-Visits";
import UserCard from "@/app/components/commons/User-Card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: { profileId: string };
}) {
  const { profileId } = await params;
  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-secondary">
        <span className="text-accent-green font-bold">
          Você está usando a versão Trial.
        </span>
        <Link href={`/${profileId}/upgrade`}>
          <button>Faça o upgrade agora!</button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <button className="w-[240px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary">
          <span className="text-accent-pink">
            <PlusIcon className="size-10" />
          </span>
          <span>Novo Projeto</span>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  );
}
