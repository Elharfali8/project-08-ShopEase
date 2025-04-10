'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { selectCartAmount } from "@/features/cart/cartSlice"
import { useAppSelector } from "@/hooks"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDropdown() {
    const cartAmount = useAppSelector(selectCartAmount)
    const {cart} = useAppSelector((store) => store.cart)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='relative'  >
                                  <ShoppingCart />
                              {cartAmount > 0 && (
                                <span className='h-6 w-6 grid place-items-center rounded-full absolute top-[-10px] right-[-10px] bg-black text-white dark:bg-white dark:text-black'>
                                {cartAmount}
                                </span>
                            )}
                          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
              <DropdownMenuGroup>
                  {cart?.map((item) => {
                      const { productId, id, img, desc, price, amount, size } = item

                      return (
                            <DropdownMenuItem key={productId} asChild>
                                  <Link href={`/products/${id}`} className="flex items-center gap-2">
                                  {img  && (
  <Image alt={desc} src={img} width={50} height={50} />
)}
                                  <div>
                                      <h3 className="font-semibold">
                                <span className="font-extrabold mr-2 text-gray-600 dark:text-gray-400" >x{amount}</span>
                                          {desc}</h3>
                                      <p>${price}</p>
                                  </div>
                                  </Link>
                            </DropdownMenuItem>
                      )
                  })}
          
        </DropdownMenuGroup>
        <DropdownMenuItem>
                  <Button asChild className="w-full"> 
                      <Link href='/cart'>
                            Cart Page
                      </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
