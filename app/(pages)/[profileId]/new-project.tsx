"use client";

import TextInput from "@/app/components/ui/Text-Input";
import Modal from "../../components/ui/Modal";
import { ArrowUpFromLine, Plus } from "lucide-react";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import TextArea from "@/app/components/ui/Text-Area";
import Button from "@/app/components/ui/Button";
import { compressFiles } from "@/app/lib/utils";
import { createProject } from "@/app/actions/create-project";

export default function NewProject({ profileId }: { profileId: string }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  function triggerImageInput(id: string) {
    document.getElementById(id)?.click();
  }

  function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const imageURL = URL.createObjectURL(file);
      return imageURL;
    }
    return null;
  }

  async function handleCreateProject() {
    setIsCreatingProject(true);
    const imagesInput = document.getElementById(
      "imageInput"
    ) as HTMLInputElement;
    if (!imagesInput.files) return;

    const compressedFile = await compressFiles(Array.from(imagesInput.files));

    const formData = new FormData();
    formData.append("file", compressedFile[0]);
    formData.append("profileId", profileId);
    formData.append("projectName", projectName);
    formData.append("projectDescription", projectDescription);
    formData.append("projectUrl", projectUrl);

    await createProject(formData);
    //mensagem de sucesso
    //toast de sucesso
    //toast de erro

    startTransition(() => {
      setIsOpen(false);
      setProjectName("");
      setProjectDescription("");
      setProjectUrl("");
      setProjectImage(null);
      router.refresh();
    });
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary"
      >
        <Plus className="size-10 text-accent-pink" />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <p className="text-white font-bold text-xl">Novo Projeto</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                {projectImage ? (
                  <img
                    src={projectImage}
                    alt="Project Image"
                    className="object-cover object-center"
                  />
                ) : (
                  <button
                    className="w-full h-full"
                    onClick={() => triggerImageInput("imageInput")}
                  >
                    100x100
                  </button>
                )}
              </div>
              <button
                className="text-white flex items-center gap-2"
                onClick={() => triggerImageInput("imageInput")}
              >
                <ArrowUpFromLine className="size-4 text-accent-purple" />
                <span>Adicionar Imagem</span>
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={(e) => setProjectImage(handleImageInput(e))}
              />
            </div>
            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Titulo do Projeto
                </label>
                <TextInput
                  id="project-name"
                  placeholder="Digite o nome do Projeto"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Descrição
                </label>
                <TextArea
                  id="project-description"
                  placeholder="Dê uma breve descrição do seu projeto"
                  className="h-36"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do Projeto
                </label>
                <TextInput
                  type="url"
                  id="project-url"
                  placeholder="Digite a URL do seu projeto"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                ></TextInput>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="font-bold text-white"
            >
              Voltar
            </button>
            <Button onClick={handleCreateProject} disabled={isCreatingProject}>
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
