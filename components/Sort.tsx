import React from 'react'

const Sort = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold'>Casual</h3>
              <div className='flex items-center gap-4'>
                <p className='text-muted-foreground'>
                  Showing 1-10 of 100 Products
                </p>
                <div className='flex items-center gap-1'>
                  <label htmlFor="sort">Sort By</label>
                  <select name="sort" id="sort" defaultValue='All' className='text-lg'>
                    <option value="popular">Most Popular</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </div>
          </div>
            </div>
  )
}

export default Sort