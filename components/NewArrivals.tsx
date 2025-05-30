import React from 'react'
import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'
import { newArrivals } from '@/utils/data'
import Link from 'next/link'
import { Button } from './ui/button'

const NewArrivals = () => {
  return (
      <section className='py-10 lg:py-14'>
          <SectionTitle text='new arrivals' />
          <div className='container main-container grid place-items-center'>
        <MainCarousel data={newArrivals} />
        <div className='grid place-items-center mt-4 lg:mt-8'>
              <Button className='py-3 lg:py-6 px-10 lg:px-20 md:text-lg capitalize lg:text-xl rounded-2xl' variant='outline' asChild>
                          <Link href='/products?new-arrivals=true'>
                          view all</Link>
                      </Button>
          </div>
          </div>
    </section>
  )
}

export default NewArrivals