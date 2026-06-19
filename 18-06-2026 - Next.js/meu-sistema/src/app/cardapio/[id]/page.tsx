import Image from 'next/image';
import Link from 'next/link';
import BotaoFavorito from "@/components/BotaoFavorito";
import { Metadata } from 'next';

// 1. Interface para mapear os dados que vêm da API
interface Prato {
  id: number;
  destacado: boolean;
  nome: string;
  imagem: string;
  categoria: string;
  descricao: string;
  preco: number;
}

// 2. Interface única para os Props da rota (Padrão Next.js 15)
interface RouteProps {
  params: Promise<{ id: string }>;
}

// 💡 A função generateMetadata roda no servidor antes da página carregar para cuidar do SEO
export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  // Aguardamos os parâmetros da URL resolverem
  const { id } = await params;

  // Buscamos os dados do prato para usar nas tags de SEO
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`);
  const prato: Prato = await res.json();

  return {
    title: `${prato.nome} | Nosso Cardápio`,
    description: prato.descricao,
    openGraph: {
      images: [prato.imagem], // A foto do prato aparece no card ao compartilhar no WhatsApp/Redes sociais!
    },
  };
}

export default async function DetalhePrato({ params }: RouteProps) {
  // 1. Capturamos o ID da URL de forma assíncrona
  const { id } = await params;

  // 2. Buscamos os dados desse prato específico (SSR: sem cache para dados sempre novos)
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    cache: 'no-store' 
  });
  
  const prato: Prato = await res.json();

  return (
    <main className="max-w-5xl mx-auto p-10">
      {/* Botão de Voltar */}
      <Link href="/cardapio" className="text-orange-600 hover:underline mb-6 inline-block font-medium">
        ← Voltar para o Cardápio
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Lado Esquerdo: Imagem Otimizada */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
          <Image 
            src={prato.imagem} 
            alt={prato.nome} 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        {/* Lado Direito: Informações da API */}
        <div className="flex flex-col justify-center">
          <span className="text-orange-600 font-semibold uppercase tracking-widest text-sm">
            {prato.categoria}
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mt-2">{prato.nome}</h1>
          
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            {prato.descricao}
          </p>

          <div className="mt-8 p-6 bg-gray-50 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Preço Individual</p>
              <span className="text-4xl font-bold text-green-700 block mt-1">
                R$ {prato.preco.toFixed(2)}
              </span>
            </div>
            <BotaoFavorito />
          </div>
          
          <p className="text-[10px] text-gray-300 mt-6 font-mono uppercase tracking-wider">
            ID do Sistema: {prato.id}
          </p>
        </div>
      </div>
    </main>
  );
}