import MenuDay from "@/shared/components/organisms/MenuDay"
import consumeApiGet from "@/shared/utils/ConsumeApi"

export default async function CardapioPage() {
    const plates = await consumeApiGet("");

    return (
        <MenuDay />
    )
}