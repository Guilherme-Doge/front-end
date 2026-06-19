import Image from 'next/image';
import BotaoFavorito from "@/components/BotaoFavorito";
import Link from 'next/link';
import Busca from "@/components/Busca";

interface Prato {
  id: number;
  destacado: boolean;
  nome: string;
  imagem: string;
  categoria: string;
  descricao: string;
  preco: number;
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata = {
  title: "Cardápio Completo",
  description: "Explore nossa seleção de Entradas, Pratos Principais e Sobremesas exclusivas.",
};

export default async function Page({ searchParams }: PageProps) {
  // 1. Aguarda a Promise do searchParams resolver (Padrão Next.js 15)
  const resolvedParams = await searchParams;
  
  // 2. Captura o termo de busca com segurança
  const query = (resolvedParams?.busca as string) || "";

  // 3. Simulação de delay/loading idêntica à original
  await new Promise((resolve) => setTimeout(resolve, 3000)); 

  // 4. Fetch dos dados da API real
  const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos', {
    next: { revalidate: 60 } 
  });
  
  const produtos: Prato[] = await resposta.json();

  // 5. Ordena os produtos: Destacados primeiro (true vira 1, false vira 0)
  produtos.sort((a: Prato, b: Prato) => Number(b.destacado) - Number(a.destacado));

  // 6. Filtra os pratos de forma case-insensitive pelo nome ou descrição
  const produtosFiltrados = produtos.filter(prato => 
    prato.nome.toLowerCase().includes(query.toLowerCase()) ||
    prato.descricao.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 font-serif">Nosso Cardápio</h1>
          <p className="text-gray-500 mt-2">Pratos artesanais preparados com ingredientes frescos.</p>
        </div>
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-400">
          {produtosFiltrados.length} itens encontrados
        </span>
      </div>

      <div className="mb-10">
        <Busca />
      </div>
      
      {/* Estado Vazio (Empty State) ou Grid de Produtos */}
      {produtosFiltrados.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-400 text-xl">Nenhum prato encontrado para "{query}"</p>
          <Link href="/cardapio" className="text-orange-600 underline mt-2 block">Limpar busca</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((prato) => (
            <div key={prato.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow">
              
              <div className="relative h-56 w-full">
                <Image 
                  src={prato.imagem} 
                  alt={prato.nome}
                  fill
                  className="object-cover"
                />
                {prato.destacado && (
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ESTRELA DA CASA ⭐
                  </span>
                )}
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/cardapio/${prato.id}`} className="hover:opacity-95 transition-opacity">
                      <h2 className="text-xl font-bold text-gray-800">{prato.nome}</h2>
                  </Link>
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    {prato.categoria}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {prato.descricao}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <span className="text-2xl font-bold text-green-700">
                    R$ {prato.preco.toFixed(2)}
                  </span>
                  <BotaoFavorito />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}