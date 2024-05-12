'use client'
import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton";
import { BsFillPencilFill, BsFillPatchCheckFill, BsXCircleFill } from "react-icons/bs";
import { Decimal } from "@prisma/client/runtime/library";


interface Item {
  id: number;              // Assuming conversion from number to string if needed
  name: string | null;
  description: string | null;
  sub?: string;            // Still optional as before
  // Include other fields as needed, allowing for 'null' where applicable
  category: string | null;
  price: Decimal | null;   // Assuming Decimal is a predefined type
  quantity: number | null;
  user_id: string;
}

interface ItemCardProps {
  item: Item;
  isAdmin: boolean;
  loggedInUser?: string;
  addItemToCart?: (itemId: number, loggedInUser: string) => void;
  deleteItem?: (itemId: number, sub: string) => void;
}

export default function ItemCard({ item, isAdmin, loggedInUser, addItemToCart, deleteItem }: ItemCardProps){
  return(
    <div className="relative m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
      transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:bg-gray-700 duration-300"
      style={{width:'16rem', height:'24rem'}}>
        {isAdmin ? (
          <div className="absolute top-0 right-0 flex p-3 space-x-4 bg-gray-900 bg-opacity-50">
            <button>
              <BsFillPencilFill className="transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-200" color="blue" size={25} />
            </button>
            <button onClick={() => {
              item.sub && deleteItem?.(item.id, item.sub)
            }}>
              <BsXCircleFill className="transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-200" color="red" size={25} />
            </button>
          </div>
        ) : (
          <></>
        )}
        <Link href={`/items/${item.id}`} >
          <Image
            className="rounded-t-lg"
            src="https://shopping-app-nextjs-project-jt.s3.amazonaws.com/items-images/knife.jpeg"
            width={300}
            height={200}
            alt="Picture of the author"
          />
        </Link>
        <div className="p-3 text-left">
            <Link href={`/items/${item.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            </Link>
            <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400 truncate">{item.description}</p>
        </div>
        <div className="flex justify-center">
          <CustomButton type="button" color="blue" content="Add to cart" loggedInUser={loggedInUser} itemId={item.id} onClick={addItemToCart}/>
        </div>
    </div>

  )
}