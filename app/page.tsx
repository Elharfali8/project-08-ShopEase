import CategoriesSection from '@/components/CategoriesSection'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import Testimonials from '@/components/Testimonials'
import TopSelling from '@/components/TopSelling'
import React from 'react'

const HomePage = () => {
  return (
    <main className=''>
      <Hero />
      <NewArrivals />
      <div className='container main-container my-3 lg:my-6'>
          <div className='h-[1px] w-full bg-ring' />
      </div>
      <TopSelling />
      <div className='container main-container my-3 lg:my-6'>
          <div className='h-[1px] w-full bg-ring' />
      </div>
      <CategoriesSection />
      <div className='container main-container my-3 lg:my-6'>
          <div className='h-[1px] w-full bg-ring' />
      </div>
      <Testimonials />
      <div className='relative '>
        <div className='mt-20 lg:mt-28 h-[180px] px-4 lg:px-2 xl:px-0 border-[2px]'>
          <Contact />
          </div>
      </div>
    </main>
  )
}

export default HomePage