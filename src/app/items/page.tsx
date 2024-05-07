import ItemCard from "@/components/ItemCard"
import prisma from "@/lib/prisma"

export default async function Items(){
  const items = await prisma.item.findMany()

  return(
    <div className="flex flex-wrap">
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />
      })}
    </div>
  )
}