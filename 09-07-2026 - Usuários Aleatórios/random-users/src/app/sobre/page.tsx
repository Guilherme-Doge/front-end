import "@/app/globals.css"

export default function sobre() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
              Página estática
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-app-dark md:text-6xl">
              Sobre o Projeto
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Esta aplicação foi criada como base para praticar Next.js,
              componentização, consumo de API, rotas e organização de uma
              interface Front-End.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold tracking-tight text-app-dark">
            Objetivo da prática
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            O objetivo é transformar esta base HTML em uma aplicação Next.js
            capaz de consumir dados da API Random User Generator e renderizar os
            perfis de forma dinâmica.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold tracking-tight text-app-dark">
            API utilizada
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            A API Random User Generator retorna usuários fictícios com nome,
            imagem, localização, contato, idade e nacionalidade.
          </p>
        </article>
      </section>
    </main>
  );
}
