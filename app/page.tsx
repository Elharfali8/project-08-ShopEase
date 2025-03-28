import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
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
    </main>
  )
}

export default HomePage