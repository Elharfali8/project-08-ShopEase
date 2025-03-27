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

export function DropdownMenuToggle() {
  const pathname = usePathname()

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
                  <Button variant='outline' size='icon' >
                      <ShoppingCart />
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
