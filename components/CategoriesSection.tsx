import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import casual from '@/assets/categories/casual.png'
import formal from '@/assets/categories/formal.png'
import party from '@/assets/categories/party.png'
import gym from '@/assets/categories/gym.png'
import Link from 'next/link'

const CategoriesSection = () => {
  return (
    <section className='py-10 lg:py-14 px-4 lg:px-2 xl:px-0 '>
      <div className="container main-container rounded-lg bg-primary-foreground py-6 lg:py-14">
        <SectionTitle text='browse by dress style' />
      </div>
    </section>
  )
}

export default CategoriesSection