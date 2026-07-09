export default async function ConsumeApiGet(params : string) {
    try {
        const response = await fetch(`https://randomuser.me/api/${params}`)

        const data = response.json()

        return data
    } catch (e) {
        console.log(e)
    }
}