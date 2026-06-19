import Image from 'next/image';

interface Prato {
  id: number;
  destacado: boolean;
  nome: string;
  imagem: string;
  categoria: string;
  descricao: string;
  preco: number;
}

export default function PratoCard({ prato } : { prato: Prato }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-64 w-full">
        <Image 
          src={prato.imagem} 
          alt={prato.nome} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-orange shadow-sm backdrop-blur-md">
          {prato.categoria}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{prato.nome}</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{prato.descricao}</p>
        
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-black text-brand-green">
            R$ {prato.preco.toFixed(2)}
          </span>
          <button className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}