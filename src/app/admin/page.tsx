
import ItemsList from "./list";
import CreateItemForm from "./form";
import { getUserProfileData } from "@/services/profile.service";

export default async function AdminPage() {
  const user = await getUserProfileData()
  return(
    <div className="flex flex-row">

      <CreateItemForm user={user}/>

      <ItemsList user={user}/>

    </div>
  )
}