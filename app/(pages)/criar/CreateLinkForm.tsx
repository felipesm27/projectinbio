"use client";
import { verifyLink } from "../../actions/verify-link";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/Text-Input";
import { sanitizeLink } from "@/app/lib/utils";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
  const [link, setlink] = useState("");
  const [error, setError] = useState("");

  async function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setlink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // validações entrada de dados
    if (link.length === 0) {
      setError("O link não pode ser vazio");
      return;
    }

    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken) {
      setError("Esse link já está em uso");
      return;
    }

    // Aqui você pode continuar com a lógica de criação do link
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white">project.in.bio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>{error && <span className="text-accent-pink">{error}</span>}</div>
    </>
  );
}
