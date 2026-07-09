import Image from "next/image";
import { Plate } from "@/shared/components/organisms/MenuDay"; 

export default function MenuCard({ nome, descricao, preco, imagem }: Plate) {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row m-2 max-w-xl">
            <div className="relative w-full md:w-48 h-48 shrink-0">
                <Image 
                    src={imagem} 
                    alt={nome} 
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 192px"
                />
            </div>
            <div className="p-4 flex flex-col justify-between grow">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{nome}</h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{descricao}</p>
                </div>
                <div className="mt-4">
                    <span className="text-green-600 font-bold text-lg">R$ {preco}</span>
                </div>
            </div>
        </article> 
    )
}