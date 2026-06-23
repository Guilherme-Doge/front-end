import "@/app/cardapio/page"
import { Plate } from "@/app/cardapio/page"
import MenuCard from "../components/MenuCard"

export default async function MenuDay() {
    const response = await fetch(`https://api-restaurante-5iqb.onrender.com/api`, {
        next: { revalidate : 60}
    }) 
    
    const data = await response.json()

    return (
        <section>
            {data.array.forEach((info : Plate) => {
                <MenuCard id={info.id}
                        nome={info.nome}
                        descricao={info.descricao}
                        categoria={info.categoria}
                        preco={info.preco} 
                        imagem={info.imagem} 
                        destacado={info.destacado} 
                        fixo={info.fixo} 
                        criado_em={info.criado_em} 
                        atualizado_em={info.atualizado_em} />
            })}
        </section>
    )
}