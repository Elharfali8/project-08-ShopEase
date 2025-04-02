'use client'

import { useState } from 'react';
import { BreadCrumbComponent } from '@/components/BreadCrumbComponent';
import Filters from '@/components/Filters';

const ProductsPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-[calc(100vh-120px)]">
      <div className="container main-container">
        <BreadCrumbComponent page="products" />
        
      

        <div className="grid lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {/* Filters Section (Hidden by default, appears when toggled) */}
          <div 
            className={` border-[1px] border-gray-200 dark:border-gray-600 rounded-lg p-4 lg:col-span-2 shadow-lg`}
          >
            <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
          </div>

          {/* Products List */}
          <div className="lg:col-span-4 xl:col-span-5">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
