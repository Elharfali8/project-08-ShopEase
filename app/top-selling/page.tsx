import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import ProductCard from '@/components/ProductCard'
import { topSelling } from '@/utils/data'
import React from 'react'

const TopSellingPage = () => {
  return (
     <main className="min-h-[calc(100vh-120px)]">
          <div className="container main-container pb-8 lg:pb-14">
              <BreadCrumbComponent page="top selling" />
              <div >
                  <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Top Selling Products:</h3>
              </div>
              <div className='my-4 lg:my-10 w-full border' />
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                  {topSelling.map((item) => {
                      return <ProductCard key={item.id} {...item} />
                  })}
             </div>
          </div>
          </main>
  )
}

export default TopSellingPage