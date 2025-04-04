'use client'

import { AddToCartButton } from '@/components/AddToCartButton'
import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import ProductCard from '@/components/ProductCard'
import SectionTitle from '@/components/SectionTitle'
import StarRating from '@/components/StarRating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { newArrivals, sizes, topSelling } from '@/utils/data'
import Image, { StaticImageData } from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

type Product = {
    id: string;
    img: StaticImageData;
    desc: string;
    rate: string;
    price: number;
    oldPrice?: number;
    promo?: number
}


const SingleProduct = () => {
  const { id } = useParams()
  const products = [...newArrivals, ...topSelling]
  const product = products.find((item) => item.id === id)
  const [cart, setCart] = useState<Product[]>([]);
  const [sizeState, setSizeState] = useState<string>('small')
  const [amount, setAmount] = useState<number>(1)

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, { ...product }]);
    console.log('Added to cart:', product);
  };

  const handleAmount = (value: string) => {
    setAmount(prevAmount => {
      if (value === 'inc') {
        return prevAmount >= 10 ? 10 : prevAmount + 1
      }
      if (value === 'dec') {
        return prevAmount <= 1 ? 1 : prevAmount - 1
      }
      return prevAmount
    })
  }

  if (!product) {
    return <p className="text-center text-lg">Product not found</p>
  }

  return (
    <main className="min-h-[calc(100vh-80px)]">
      <div className="container main-container pb-8 lg:pb-14">
        <BreadCrumbComponent page="products" />
        
        <div className="grid lg:grid-cols-2 gap-8 items-center ">
          <div className="grid place-items-center">
            <Image
              src={product.img || '/fallback-image.jpg'} 
              alt={product.desc || 'Product image'}
              width={444}
              height={530}
              className='rounded-2xl'
            />
          </div>
          <div >
            <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold'>{product?.desc}</h1>
            <div className='flex items-center gap-3 text-lg md:text-xl lg:text-2xl my-2 lg:my-3'>
                  <StarRating rate={product?.rate} />
                  <span className='font-medium text-muted-foreground'>{product?.rate}</span>
            </div>
            <div className='flex items-center gap-4 lg:gap-6'>
                  <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold'>${product?.price}</p>
                  {product?.oldPrice && <p className="font-bold md:text-xl lg:text-2xl xl:text-3xl  line-through text-muted-foreground">${product?.oldPrice}</p>}
                              {product?.promo && <span className="px-3 rounded text-red-500 border border-red-500">-{product?.promo}%</span>}
            </div>
            {/* Description */}
            <p className='my-3 lg:my-5 text-muted-foreground lg:text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptatem voluptatibus aliquam eveniet optio voluptatum officiis eaque atque voluptas sequi.
            </p>
            {/* Sizes */}
            <div className='flex items-center gap-4 flex-wrap mt-4 lg:mt-8 mb-2 lg:mb-5'>
              {sizes.map((size, index) => {
                return (
                  <Button key={index} variant={`${sizeState === size ? 'default' : 'outline'}`} className='rounded-xl capitalize lg:text-lg cursor-pointer' onClick={() => setSizeState(size)}>
                      {size}
                  </Button>
                )
              })}
            </div>
            {/* Separator */}
            <div className='grid place-items-center my-4 lg:my-8'>
                <div className='w-[70%] h-[1px] border' />
            </div>
            {/* Add To Cart */}
            <div className='grid xl:grid-cols-6 gap-2 items-center w-full'>
              <div className=' xl:col-span-2'>
                {/* dec */}
                  <Button 
                  variant='outline' 
                  className=' rounded-r-none text-lg md:text-xl lg:text-2xl h-10 md:h-12 md:w-16 cursor-pointer' 
                  size='lg'
                  onClick={() => handleAmount('dec')}
                  >
                    -
                </Button>
                {/* amount */}
                <Badge 
                variant='outline' 
                className=' rounded-none text-lg md:text-xl lg:text-2xl h-10 w-14 md:h-12 md:w-16 dark:border-[#ffffff26]' 
                  
                >
                  {amount}
                </Badge>
                {/* ind */}
                  <Button 
                  variant='outline' 
                  className=' rounded-l-none text-lg md:text-xl lg:text-2xl h-10 md:h-12 md:w-16 cursor-pointer' 
                  size='lg'
                  onClick={() => handleAmount('inc')}
                  >
                    +
                    </Button>
              </div>
              <div className=' xl:col-span-4 '>
                <AddToCartButton product={product} addToCart={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>

        <div className='border w-full my-6 lg:my-12' />
        <div>
          <SectionTitle text='you might also like' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {newArrivals.map((item) => {
                return <ProductCard key={item.id} {...item} />
              })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
