import { deleteItem, getUsersItems } from "./actions"
import ItemCard from "@/components/ItemCard"

export default async function ItemsList(props: any){
  const items = await getUsersItems(props.user.sub)

  if (!items){
    return(
      <>
      </>
    )
  }

  return(
    <div className="basis-3/4 flex flex-row">
      {items.map((item: any) => {
        return <ItemCard key={item.id} item={item} isAdmin={true} deleteItem={deleteItem} />
      })}
    </div>
  )
}