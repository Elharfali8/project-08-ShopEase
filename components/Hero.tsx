import React from 'react'
import { FadeDown } from './FadeDown'
import hero from '@/assets/hero-sm.png'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
      <section className='grid place-items-center min-h-[calc(100vh-120px)] bg-primary-foreground overflow-hidden' >
          <div className='container main-container grid items-center lg:grid-cols-2 gap-4'>
              <div className='py-8 lg:py-0'>
              <FadeDown
                    direction="down"
                    className=""
                    >
                    <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase mb-2 lg:mb-4">
                        find clothes that matches your style
                    </h1>
                    <div className="text-muted-foreground lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ullam eius rerum vel maxime soluta atque nam adipisci animi mollitia.
                    </div>
                  </FadeDown>
                  <div className='my-4 lg:my-6'>
                          <Link href='/products' className='py-2 lg:py-3 px-6 lg:px-10 rounded-lg bg-foreground text-white font-medium text-lg lg:text-xl dark:text-black'>
                              Shop Now
                          </Link>
                  </div>
              </div>
              {/*  */}
              <div className='grid place-items-center '>
                  <Image
                      src={hero}
                      alt='hero'
                      width={500}
                      height={600}
                      className='w-[400px] lg:w-[500px] rounded-lg shadow-lg dark:shadow-gray-600'
                  />
              </div>
          </div>
    </section>
  )
}

export default Hero