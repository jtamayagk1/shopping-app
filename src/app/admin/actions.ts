'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const path = '/admin'

export async function getUsersItems(user_sub: any){
  try{
    const items = await prisma.item.findMany({
      where:{
        user_id: user_sub
      }
    })
    return items
  } catch (error) {
    console.log(error)
  }
}

export async function createItem(formData: FormData, user_sub: any){
  try {
    const newItem = await prisma.item.create({
      data:{
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        price: parseInt(formData.get('price') as string),
        quantity: parseInt(formData.get('quantity') as string),
        user_id: user_sub
      }
    })
    revalidatePath(path)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteItem(id: number, user: string){
  try {
    const deletedItem = await prisma.item.delete({
      where:{
        id: id,
        user_id: user
      }
    })
    revalidatePath(path)
  } catch(error) {
    console.log(error)
  }
}