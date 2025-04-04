'use client'

import { Settings2 } from 'lucide-react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { categories, colors, types } from '@/utils/data'
import PriceSlider from './PriceSlider'
import { AiOutlineStop } from "react-icons/ai";

const Filters = ({
    showFilters, setShowFilters
}: {
    showFilters: boolean, 
    setShowFilters: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
    const [category, setCategory] = useState<string>('all')
    const [typeClothes, setTypeClothes] = useState<string>('all')
    const [selectedColor, setSelectedColor] = useState<string>("all");
    const colorClasses: Record<string, string> = {
        black: 'bg-black',
        white: 'bg-white',
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        brown: 'bg-amber-900',
      };
    
  return (
      <div className='lg:sticky top-4 bg-'>
          <div className='flex items-center justify-between'>
              <h3 className='text-lg lg:text-xl font-semibold'>Filters</h3>
              <button 
                type='button' 
                className='text-lg lg:text-xl' 
                onClick={() => setShowFilters((prev) => !prev)}
              >
                  <Settings2 />
              </button>
          </div>

          <div className={`border-[1px] my-3 lg:my-5 ${showFilters ? 'block' : 'hidden'}`} />
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={showFilters ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`${showFilters ? 'block' : 'hidden'}   rounded-lg flex flex-wrap gap-3 mb-4 lg:mb-6`}
          >
              
              {categories.map((cat, index) => {
                  return (
                      <button key={index} type='button' className={`px-3 py-1 rounded-xl border capitalize shadow transition-all ease-in-out duration-150 hover:bg-border cursor-pointer ${category === cat && 'bg-border'}`} onClick={() => setCategory(cat)}>
                          {cat}
                      </button>
                  )
              })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={showFilters ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`${showFilters ? 'block' : 'hidden'}  border p-4 rounded-lg`}
          >
              <ul className='grid gap-y-2 '>
                  {types.map((t, index) => {
                      return (
                          <li key={index}>
                              <button type='button' className={`md:text-lg capitalize text-muted-foreground transition-all ease-in-out duration-150 hover:border-b-[2px]  cursor-pointer ${t === typeClothes && '!text-black dark:!text-white border-b-[2px] border-b-black dark:border-b-white '}`} onClick={() => setTypeClothes(t)}>
                                  {t}
                              </button>
                          </li>
                      )
                  })}
              </ul>
          </motion.div>

          <div className={`border-[1px] mt-3 lg:mt-5 ${showFilters ? 'block' : 'hidden'}`} />

          {showFilters && (
              <div >
                  <h1 className=' text-lg lg:text-xl font-medium mb-3'>Price</h1>
              <PriceSlider  />
            </div>
          )}

          <div className={`border-[1px] my-3 lg:my-5 ${showFilters ? 'block' : 'hidden'}`} />
          
         

      </div>
  )
}

export default Filters
