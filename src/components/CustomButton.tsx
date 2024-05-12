'use client'

interface CustomButtonProps {
  color: string
  itemId?: number
  type: 'button' | 'submit' | 'reset';
  content: string
  loggedInUser?: string
  onClick?: (itemId: number, loggedInUser: string)=>void
}

export default function CustomButton({
  color, 
  itemId = 0, 
  type = 'button', 
  content, 
  loggedInUser = '', 
  onClick
}: CustomButtonProps){
  const variants: Record<string, string>= {
    blue: "bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    red: "bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
  }
  return(
    <button
      onClick={() => onClick?.(itemId, loggedInUser)}
      type={type}
      className={`place-self-center px-3 py-2 w-fit text-sm font-medium text-center text-white ${variants[color]}`}>
    {content}
    </button>
  )
}