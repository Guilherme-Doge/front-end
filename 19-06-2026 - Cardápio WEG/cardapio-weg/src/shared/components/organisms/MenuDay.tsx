import MenuCard from "../components/MenuCard"

export interface Plate {
    id: string;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    imagem: string;
    destacado: boolean;
    fixo: boolean;
    criado_em: string;
    atualizado_em: string;
}

export default async function MenuDay(plates : Plate[]) {

    return (
        <section className="flex justify-around flex-col px-2 py-4">
            {plates.length === 0 && (
                <p className="text-center text-gray-500 py-10">Nenhum prato encontrado na API.</p>
            )}

            {plates.map((info: Plate) => (
                <MenuCard key={info.id} {...info} />
            ))}
        </section>
    )
}