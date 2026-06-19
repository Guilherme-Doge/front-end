"use client";

import { excluirPrato } from "@/app/admin/action";

export default function BotaoExcluir({ id }: { id: string }) {
  return (
    <button
      onClick={async () => {
        if (confirm("Deseja realmente remover este prato do cardápio?")) {
          await excluirPrato(id);
        }
      }}
      className="text-red-500 hover:text-red-700 text-sm font-bold"
    >
      Excluir
    </button>
  );
}