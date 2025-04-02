'use client'

import { useState } from 'react';
import { BreadCrumbComponent } from '@/components/BreadCrumbComponent';
import Filters from '@/components/Filters';
import Sort from '@/components/Sort';
import GridLayout from '@/components/GridLayout';
import { newArrivals, topSelling } from '@/utils/data';

const ProductsPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const products = [...newArrivals, ...topSelling]

  return (
    <main className="min-h-[calc(100vh-120px)]">
      <div className="container main-container">
        <BreadCrumbComponent page="products" />
        
      

        <div className="grid lg:grid-cols-6 xl:grid-cols-7 gap-4 items-start">
          {/* Filters Section (Hidden by default, appears when toggled) */}
          <div 
            className={` border-[1px] border-gray-200 dark:border-gray-600 rounded-lg p-4 lg:col-span-2 shadow-lg`}
          >
            <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
          </div>

          {/* Products List */}
          <div className="lg:col-span-4 xl:col-span-5">
            <Sort />
            <div className='h-[1px] border w-full my-4' />
            <GridLayout products={products} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
