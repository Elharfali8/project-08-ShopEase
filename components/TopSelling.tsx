import React from 'react'
import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'
import { Button } from './ui/button'
import Link from 'next/link'
import { topSelling } from '@/utils/data'

const TopSelling = () => {
  return (
    <section className='py-10 lg:py-14'>
          <SectionTitle text='top selling' />
          <div className='container main-container grid place-items-center'>
        <MainCarousel data={topSelling} />
        <div className='grid place-items-center mt-4 lg:mt-8'>
              <Button className='py-3 lg:py-6 px-10 lg:px-20 md:text-lg capitalize lg:text-xl rounded-2xl' variant='outline' asChild>
                          <Link href='/products?top-selling=true'>
                          view all</Link>
                      </Button>
          </div>
          </div>
    </section>
  )
}

export default TopSelling