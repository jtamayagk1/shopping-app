'use server'

import prisma from "@/lib/prisma";

export async function getItems(){
  try {
    const items = await prisma.item.findMany()
    return items
  } catch (error) {
    console.log(error)
  }
}

export async function addItemToCart(item_id: number, user_id: string){
  try {
    const date = new Date()
    const addItem = await prisma.cart.create({
      data:{
        item_id: item_id,
        user_id: user_id,
        added_time: date
      }
    })
  } catch (error) {
    console.log(error)
  }
}