'use client'
import CustomButton from "@/components/CustomButton"
import { useRef } from "react";
import { createItem } from "./actions"

export default function CreateItemForm(props: any){
  const ref = useRef<HTMLFormElement>(null)
  const fields = ['name','description','category','price','quantity']

  function upperCaseFirstLetter(str: string){
    let modStr = str[0].toUpperCase() + str.slice(1);
    return modStr
  }

  return(
    <div className="basis-1/4 flex justify-center">
      <form action={async (formData) => {
        await createItem(formData, props.user.sub)
        ref.current?.reset()
        }} ref={ref} className="flex flex-col justify-items-center text-center">
        <h1>Create new item</h1>
        {fields.map((field) => {
          return <input key={field} className=" text-black p-2 m-2" type='text' name={field} placeholder={upperCaseFirstLetter(field)}/>
        })}
        <CustomButton type="submit" content="Submit" color="blue"/>
      </form>
    </div>
  )
}