'use client'

import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { decreaseAmount, increaseAmount, removeFromCart } from '@/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const { cart } = useAppSelector((store) => store.cart)
    const dispatch = useAppDispatch()
    
    if (cart.length < 1) {
        return (
            <main className="min-h-[calc(100vh-80px)] grid place-items-center p-4 text-center">
                <Image src="/images/image-7.png" alt="Empty cart" width={200} height={200} className="mx-auto mb-4" />
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4'>Your cart is empty!</h1>
                    <Button asChild className='capitalize px-6 py-2 text-base md:text-lg'>
                        <Link href='/products'>Explore Products</Link>
                    </Button>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-[calc(100vh-80px)] px-4">
            <div className="container main-container pb-8 lg:pb-14">
                <BreadCrumbComponent page="products" cart={true} />

                {/* Header */}
                <div className='hidden md:grid md:grid-cols-5 lg:grid-cols-6 gap-4 mb-4'>
                    <h3 className='md:col-span-2 lg:col-span-3 text-xl md:text-2xl lg:text-3xl font-bold text-ring'>Products</h3>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-ring'>Amount</h3>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-ring'>Total</h3>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-ring'>Remove</h3>
                </div>

                {/* Items */}
                {cart.map((item) => {
                    const { productId, img, price, desc, amount } = item

                    return (
                        <div key={productId} className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center border-b py-4 '>
                            {/* Product Info */}
                            <div className='md:col-span-2 lg:col-span-3 flex gap-4'>
                                <Image
                                    src={img}
                                    alt={desc}
                                    width={120}
                                    height={160}
                                    className='rounded-2xl object-cover w-[120px] h-[160px]'
                                />
                                <div>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-semibold'>{desc}</h3>
                                    <p className='text-md md:text-lg mt-1 text-muted-foreground'>${price}</p>
                                </div>
                            </div>

                            {/* Amount Control */}
                            <div className='md:col-span-1 flex items-center gap-1'>
                                <Button
                                    variant='outline'
                                    className='rounded-r-none h-8 w-8 md:w-10'
                                    size='sm'
                                    onClick={() => dispatch(decreaseAmount({ productId }))}
                                >-</Button>
                                <Badge
                                    variant='outline'
                                    className='rounded-none h-8 w-8 md:w-10 text-md md:text-lg flex items-center justify-center'
                                >{amount}</Badge>
                                <Button
                                    variant='outline'
                                    className='rounded-l-none h-8 w-8 md:w-10'
                                    size='sm'
                                    onClick={() => dispatch(increaseAmount({ productId }))}
                                >+</Button>
                            </div>

                            {/* Total Price */}
                            <div className='md:col-span-1 font-semibold text-lg'>
                            ${((amount ?? 0) * (price ?? 0)).toFixed(2)}
                                </div>

                            {/* Remove Button */}
                            <div className='md:col-span-1'>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => dispatch(removeFromCart(productId))}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default page
