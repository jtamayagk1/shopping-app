'use client'

import CustomButton from "../components/CustomButton";
import { createItem } from "./actions";
import { useRef } from "react";

export default function AdminPage(){
  const ref = useRef<HTMLFormElement>(null)
  const fields = ['name','description','category','price','quantity']

  function upperCaseFirstLetter(str: string){
    let modStr = str[0].toUpperCase() + str.slice(1);
    return modStr
  }

  return(
    <div className="flex flex-col justify-center">
      <div className="text-center">
        <h1>Admin</h1>
      </div>
      <div>
        <div className="flex justify-center p-3">
          <form action={async (formData) => {
            await createItem(formData)
            ref.current?.reset()
            }} ref={ref} className="flex flex-col w-1/4 justify-items-center">
            {fields.map((field) => {
              return <input key={field} className="block text-black p-2 m-2" type='text' name={field} placeholder={upperCaseFirstLetter(field)}/>
            })}
            <CustomButton type="submit" content="Submit" color="blue"/>
          </form>
        </div>
        <div>
          <h1>test</h1>
        </div>
      </div>
    </div>
  )
}