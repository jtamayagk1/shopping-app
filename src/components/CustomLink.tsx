import Link from "next/link";

export default function CustomLink(props: any){
  let color = props.color

  const variants: Record<string, string>= {
    blue: "bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    red: "bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
  }
  return(
    <Link href={props.href} 
      className={`inline-flex items-center mb-1 px-3 py-2 text-sm font-medium text-center text-white ${variants[color]}`}>
    {props.content}
    </Link>
  )
}