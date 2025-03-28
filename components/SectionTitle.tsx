import React from 'react'

const SectionTitle = ({text}:{text: string}) => {
  return (
      <div className='grid place-items-center mb-6 lg:mb-10'>
          <h1 className=' capitalize font-extrabold text-3xl md:text-4xl lg:text-5xl'>{text}</h1>
    </div>
  )
}

export default SectionTitle