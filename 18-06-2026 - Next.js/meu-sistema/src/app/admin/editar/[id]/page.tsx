import { editarPrato } from "../../action";

interface Prato {
  id: number;
  destacado: boolean;
  nome: string;
  imagem: string;
  categoria: string;
  descricao: string;
  preco: number;
}

// 1. Tipando os parâmetros dinâmicos da rota (Padrão Next.js 15)
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PaginaEditarPrato({ params }: PageProps) {
  // 2. Aguarda a Promise do params resolver para obter o ID (como string)
  const { id } = await params;

  // 3. Busca os dados atuais do prato para preencher o formulário
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    next: { revalidate: 0 } // Garante que trará os dados mais recentes do banco
  });
  
  const prato: Prato = await res.json();

  // 4. Criamos uma versão da Action que já conhece o ID
  // Convertemos para Número caso a sua server action "editarPrato" espere o ID numérico
  const editarPratoComId = editarPrato.bind(null, id);

  return (
    <main className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-3xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Editar Prato</h1>
      
      <form action={editarPratoComId} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Nome do Prato</label>
          <input name="nome" defaultValue={prato.nome} className="w-full p-3 border rounded-xl" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Descrição</label>
          <textarea name="descricao" defaultValue={prato.descricao} className="w-full p-3 border rounded-xl h-32" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Categoria</label>
          <select name="categoria" defaultValue={prato.categoria} className="w-full p-3 border rounded-xl bg-white">
            <option value="Entradas">Entradas</option>
            <option value="Pratos Principais">Pratos Principais</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Preço (R$)</label>
          <input name="preco" type="number" step="0.01" defaultValue={prato.preco} className="w-full p-3 border rounded-xl" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">URL da Imagem</label>
          <input name="imagem" type="url" defaultValue={prato.imagem} className="w-full p-3 border rounded-xl" />
        </div>

        <label className="flex items-center gap-2 p-2 cursor-pointer select-none">
          <input name="destacado" type="checkbox" defaultChecked={prato.destacado} className="w-5 h-5 accent-orange-600" />
          <span className="text-gray-700 font-medium">Manter em Destaque?</span>
        </label>

        <button type="submit" className="bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-2">
          Atualizar Prato
        </button>
      </form>
    </main>
  );
}