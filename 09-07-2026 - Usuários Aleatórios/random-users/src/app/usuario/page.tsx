import Link from "next/link";
import Image from "next/image";
import ConsumeApiGet from "@/utils/ConsumeApi";
import User from "@/types/User";

interface UsuarioPageProps {
  searchParams: Promise<{ seed?: string }>;
}

export default async function UsuarioPage({ searchParams }: UsuarioPageProps) {
  const { seed } = await searchParams;

  const queryParam = seed ? `?seed=${seed}` : "";
  const response = await ConsumeApiGet(queryParam);
  
  const rawUser = response?.results?.[0];
  const currentSeed = response?.info?.seed || seed || "";

  if (!rawUser) {
    return (
      <main className="flex h-screen flex-col items-center justify-center bg-slate-50 p-4">
        <p className="text-lg font-bold text-slate-600">Usuário não encontrado.</p>
        <Link href="/" className="mt-4 text-sm font-extrabold text-app-primary hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  const user: User = {
    name: { first: rawUser.name.first, last: rawUser.name.last },
    nat: rawUser.nat,
    email: rawUser.email,
    location: { 
      city: rawUser.location.city, 
      state: rawUser.location.state, 
      country: rawUser.location.country 
    },
    dob: { age: rawUser.dob.age },
    phone: rawUser.phone,
    cell: rawUser.cell,
    picture: { large: rawUser.picture.large },
    seed: currentSeed,
  };

  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50 min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Link href="/random-users" className="text-sm font-extrabold text-app-primary hover:text-blue-800">
            ← Voltar para usuários
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <aside className="rounded-2xl border border-slate-200 bg-white p-6">
              <Image 
                src={user.picture.large} 
                width={160} 
                height={160} 
                alt={`Foto de ${user.name.first}`} 
                className="h-40 w-40 rounded-3xl object-cover" 
              />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
                Nacionalidade {user.nat}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-app-dark">
                {`${user.name.first} ${user.name.last}`}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600 break-all">
                {user.email}
              </p>
            </aside>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold tracking-tight text-app-dark">
                Informações do perfil
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Telefone</p>
                  <p className="mt-1 font-bold text-app-dark">{user.phone}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Celular</p>
                  <p className="mt-1 font-bold text-app-dark">{user.cell}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Cidade</p>
                  <p className="mt-1 font-bold text-app-dark">{user.location.city}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Estado</p>
                  <p className="mt-1 font-bold text-app-dark">{user.location.state}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">País</p>
                  <p className="mt-1 font-bold text-app-dark">{user.location.country}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Idade</p>
                  <p className="mt-1 font-bold text-app-dark">{user.dob.age} anos</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}