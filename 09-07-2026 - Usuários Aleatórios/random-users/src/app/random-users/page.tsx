import Link from "next/link";

import "@/app/globals.css"
import ConsumeApiGet from "@/utils/ConsumeApi";
import User from "@/types/User";
import UserCard from "@/components/organisms/UserCard";

export default async function Home() {
  const response = await ConsumeApiGet("?results=4");
  
  const currentSeed = response?.info?.seed || "";
  const results = response?.results || [];

  const users: User[] = results.map((u: User): User => ({
    name: { first: u.name.first, last: u.name.last },
    nat: u.nat,
    email: u.email,
    location: { city: u.location.city, state: u.location.state, country: u.location.country },
    dob: { age: u.dob.age },
    phone: u.phone,
    cell: u.cell,
    picture: { large: u.picture.large },
    seed: currentSeed,
  }));

  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
              Prática com API
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-app-dark md:text-6xl">
              Perfis fictícios para praticar Next.js
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Esta base simula uma interface de consulta de usuários. Na versão em Next.js,
              os cards deverão ser renderizados a partir da API Random User Generator.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#usuarios" className="rounded-full bg-app-primary px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
                Ver usuários
              </Link>
              <Link href="/sobre" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-app-dark hover:bg-slate-50">
                Sobre o projeto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14" id="usuarios">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {users.map((u: User, index: number) => (
            <UserCard key={u.email || index} user={u} />
          ))}
        </div>
      </section>
    </main>
  );
}
