export default async function consumeApiGet(params : string) {
    try {
        const response = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${params}`, {
            next: { revalidate : 60 }
        })
        
        if (!response.ok) {
            throw new Error("Falha ao buscar dados da API");
        }

        const data = await response.json()
        const plates = Array.isArray(data) ? data : (data.array || [])

        return plates
    } catch (e) {
        console.log(e)
    }
}