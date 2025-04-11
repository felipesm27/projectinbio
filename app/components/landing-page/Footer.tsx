"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // mostra só quando rolar mais de 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex items-center justify-between w-full px-4 py-6">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="Logo" />
        <span className="text-sm text-white font-bold">Project.in.Bio</span>
      </div>
      <div>
        <span className="whitespace-nowrap text-sm text-white font-light">
          Todos os direitos Reservados © {new Date().getFullYear()}
        </span>

        {showButton && (
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-accent-purple p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="text-white w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
}
