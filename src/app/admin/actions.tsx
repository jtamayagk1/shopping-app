'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createItem(formData: FormData, user_sub: any){
  try {
    const newItem = await prisma.item.create({
      data:{
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        price: parseInt(formData.get('price') as string),
        quantity: parseInt(formData.get('quantity') as string),
        user: user_sub
      }
    })
    revalidatePath('/admin')
  } catch (error) {
    console.log(error)
  }
}

export default async function getUsersItems(user_sub: any){
  try{
    const items = await prisma.item.findMany({
      where:{
        user: user_sub
      }
    })
    return items
  } catch (error) {
    console.log(error)
  }
}