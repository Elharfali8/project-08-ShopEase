import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import StarRating from './StarRating';

type ProductsProps = {
    id: string;
    img: string;  
    desc: string;
    rate: string;  
    price: number;
    oldPrice?: number;
    promo?: number;
};

const ProductCard = ({ id, img, desc, rate, price, oldPrice, promo }: ProductsProps) => {
    
  return (
      <Link href={`/products/${id}`} className='grid place-items-center transition-all ease-in-out duration-100 hover:bg-[#F0EEEd] p-4 rounded-xl hover:dark:text-black'>
          <Image
              src={img}
              alt={desc}
              width={295}
              height={298}
              className='w-[295px] h-[298px] rounded-3xl'
          />
          <div className='flex flex-col items-center md:items-start  md:justify-start w-full px-6 '>
              <h3 className='mt-2  text-lg lg:text-xl font-bold '>{desc}</h3>
              <div className='flex items-center gap-3 lg:text-lg'>
                  <StarRating rate={rate} />
                  <span className='font-medium text-muted-foreground'>{rate}</span>
              </div>
              <div className='flex items-center gap-4'>
                  <p className='text-lg md:text-xl lg:text-2xl font-semibold'>${price}</p>
                  {oldPrice && <p className="font-bold text-lg lg:text-xl line-through text-muted-foreground">${oldPrice}</p>}
                              {promo && <span className="px-2 rounded text-red-500 border border-red-500">-{promo}%</span>}
              </div>
          </div>
    </Link>
  )
}

export default ProductCard