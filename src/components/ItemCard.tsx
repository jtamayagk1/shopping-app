import Image from "next/image"
import Link from "next/link"
import { BsFillPencilFill, BsFillPatchCheckFill, BsXCircleFill } from "react-icons/bs";


export default function ItemCard(props: any){
  return(
    <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
      transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:bg-gray-700 duration-300 "
      style={{width:'16rem', height:'24rem'}}>
        <Link href={`/items/${props.item.id}`} >
          <Image
            className="rounded-t-lg"
            src="/placeholder.png"
            width={300}
            height={200}
            alt="Picture of the author"
          />
        </Link>
        <div className="p-3 text-left">
            <Link href={`/items/${props.item.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.item.name}</h5>
            </Link>
            <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400 truncate">{props.item.description}</p>
        </div>
        <div className="flex justify-center">
          <Link href="#" className="inline-flex items-center mb-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </Link>
        </div>
    </div>

  )
}