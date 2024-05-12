import { getItems, addItemToCart } from "./actions"
import ItemCard from "@/components/ItemCard"
import { getUserProfileData } from "@/services/profile.service"
import { getItem } from "@/services/s3.service"

export default async function Items(){
  const items = await getItems()
  const user = await getUserProfileData()

  return(
    <div className="flex flex-wrap">
      {items?.map((item) => {
        return <ItemCard key={item.id} item={item} loggedInUser={user?.sub} addItemToCart={addItemToCart} isAdmin={false}/>
      })}
    </div>
  )
}