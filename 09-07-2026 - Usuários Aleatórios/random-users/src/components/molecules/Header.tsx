'use client'

import Link from "next/link";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import "@/app/globals.css";

export default function Header() {
    const router = useRouter();
    
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/random-user"
          className="text-lg font-extrabold tracking-tight text-app-dark"
        >
          UserList
        </Link>

        <nav
          className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          aria-label="Navegação principal"
        >
          <Link
            href="#"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              router.back();
            }}
            className="rounded-full bg-app-soft px-3 py-2 text-app-primary"
          >
            Usuários
          </Link>
          <Link
            href="/sobre"
            className="rounded-full px-3 py-2 hover:bg-slate-100"
          >
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
