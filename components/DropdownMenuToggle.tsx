'use client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { links } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { ToggleTheme } from "./ToggleTheme";
import { CircleUser, ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { selectCartAmount } from "@/features/cart/cartSlice";

export function DropdownMenuToggle() {
  const pathname = usePathname()
  const cartAmount = useAppSelector(selectCartAmount)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon' className=' cursor-pointer'>
          <FaBars  />
        </Button>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 lg:hidden">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        {links.map((link) => {
                      const { id, title, path } = link
                      return (
                          <DropdownMenuItem asChild key={id} className="">
                              <Link href={path} className={` capitalize cursor-pointer  ${pathname === path ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {title}
                            </Link>
                          </DropdownMenuItem>
                      )
                  })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
       
        <div className="grid place-items-center py-2">
        <div className='flex items-center gap-4'>
                  <ToggleTheme />
                  <Button variant='outline' size='icon' className='relative'  >
                      <Link href='/cart'>
                          <ShoppingCart />
                      </Link>
                      {cartAmount > 0 && (
                        <span className='h-6 w-6 grid place-items-center rounded-full absolute top-[-10px] right-[-10px] bg-black text-white dark:bg-white dark:text-black'>
                        {cartAmount}
                        </span>
                    )}
                  </Button>
                  <Button variant='outline' size='icon' >
                      <CircleUser />
                  </Button>
              </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
