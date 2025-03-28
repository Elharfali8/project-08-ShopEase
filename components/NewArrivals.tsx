import React from 'react'
import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'
import { newArrivals } from '@/utils/data'

const NewArrivals = () => {
  return (
      <section className='py-10 lg:py-14'>
          <SectionTitle text='new arrivals' />
          <div className='container main-container grid place-items-center'>
              <MainCarousel data={newArrivals} />
          </div>
    </section>
  )
}

export default NewArrivals