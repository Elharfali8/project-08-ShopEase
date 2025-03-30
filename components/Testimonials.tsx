import React from 'react'
import ResponsiveCarousel from './ResponsiveCarousel'
import SectionTitle from './SectionTitle'
import { testimonials } from '@/utils/data'

const Testimonials = () => {
    
  return (
      <section className='py-10 lg:py-14'>
          <SectionTitle text='our happy customers' />
          <ResponsiveCarousel data={testimonials} />
    </section>
  )
}

export default Testimonials