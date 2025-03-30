import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Contact = () => {
  return (
      <div className='container main-container relative bg-primary-foreground  !px-4 py-8 lg:py-12 rounded-lg top-[-100px] md:top-[-80px] shadow-lg border grid md:grid-cols-2 gap-6 items-center'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          <div className='grid place-items-center w-full max-w-lg'>
              <Input type="email" placeholder="Email" className='w-full max-w-lg' />
              <Button className='w-full mt-2'>
                  Subscribe to Newsletter
              </Button>
          </div>
    </div>
  )
}

export default Contact