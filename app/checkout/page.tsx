// app/checkout/page.tsx

'use client'

import { useAppSelector } from '@/hooks'
import { useUser } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios'

const CheckoutPage = () => {
  const { cart, totalPrice } = useAppSelector((store) => store.cart)
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const deliveryFee = 15
  const totalWithDelivery = totalPrice + deliveryFee

  const handleOrder = async () => {
    if (!user) {
      alert('Please login to place your order.')
      return
    }
  
    try {
      setLoading(true)
  
      const orderData = {
        username: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        total: totalWithDelivery,
        items: cart.map(item => ({
          productId: item.productId,
          title: item.desc,
          price: item.price,
          quantity: item.amount ?? 1, // fallback to 1
        })),
      }
  
      // For now, just log the order
      console.log('Order placed:', orderData)
  
      // Optionally clear cart here
      // dispatch(clearCart())  <-- if you make a clearCart reducer
  
      router.push('/success')
    } catch (error) {
      console.error('Order failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-[calc(100vh-80px)] px-4 grid place-items-center'>
      <div className='w-full max-w-2xl border rounded-2xl p-6 shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Checkout</h2>
        
        <ul className='grid gap-3 mb-4'>
          {cart.map(item => (
            <li key={item.productId} className='flex justify-between'>
              <span>{item.desc} × {item.amount}</span>
              <span>${(item.price * (item.amount ?? 1)).toFixed(2)}</span>
            </li>
          ))}
          <li className='flex justify-between font-semibold'>
            <span>Delivery</span>
            <span>${deliveryFee}</span>
          </li>
          <li className='flex justify-between font-bold text-xl'>
            <span>Total</span>
            <span>${totalWithDelivery.toFixed(2)}</span>
          </li>
        </ul>

        <Button
          className='w-full mt-4'
          onClick={handleOrder}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </Button>
      </div>
    </main>
  )
}

export default CheckoutPage
