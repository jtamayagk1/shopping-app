import prisma from "@/lib/prisma"

export default async function ItemPage({ params }: { params: { id: string } }) {
  const item = await prisma.item.findFirst({
    where:{
      id: parseInt(params.id)
    }
  })
  return (
    <div>
      <h1>ID: {item?.id}</h1>
      <h1>Name: {item?.name}</h1>
      <h1>Description: {item?.description}</h1>
      <h1>Price: {item?.price?.toString()}</h1>
      <h1>Quantity: {item?.quantity}</h1>
    </div>
  )
}