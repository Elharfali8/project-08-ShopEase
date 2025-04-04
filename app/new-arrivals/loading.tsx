import { Loader2Icon } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
      <div className='h-[calc(100vh-80px)] grid place-items-center'>
          <Loader2Icon size={100} className=' animate-spin' />
    </div>
  )
}

export default loading