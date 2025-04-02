'use client'

import { links } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { CircleUser, ShoppingCart} from 'lucide-react'
import { ToggleTheme } from './ToggleTheme'

import { DropdownMenuToggle } from './DropdownMenuToggle'

const Navbar = () => {
    const pathname = usePathname()
    

  return (
      <nav className=' h-20 grid place-items-center shadow-md dark:shadow-gray-700 z-[99] '>
          <div className="container main-container flex items-center justify-between ">
              <Link href='/' className='text-2xl lg:text-4xl font-extrabold'>
                ShopEase
              </Link>
              <ul className='hidden lg:flex items-center gap-4'>
                  {links.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <Link href={path} className={`text-xl font-medium capitalize  ${pathname === path ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {title}
                            </Link>
                          </li>
                      )
                  })}
              </ul>

              <div className='hidden lg:flex items-center gap-3'>
                  <ToggleTheme />
                  <Button variant='outline' size='icon' >
                      <ShoppingCart />
                  </Button>
                  <Button variant='outline' size='icon' >
                      <CircleUser />
                  </Button>
              </div>
              <div className='lg:hidden grid place-items-center '>
                  <DropdownMenuToggle  />
              </div>
          </div>
    </nav>
  )
}

export default Navbar