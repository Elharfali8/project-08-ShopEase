'use client'

import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {

  return (
      <header className=''>
          <div className='py-2 w-full grid place-items-center bg-foreground text-background dark:bg-slate-700'>
              <p className='dark:text-white'>
              Sign up and get 20% off to your first order. <Link href='/sign-ip' className=' text-chart-2 underline'>Sign Up Now</Link>
              </p>
          </div>
          <Navbar />

      </header>
  )
}

export default Header