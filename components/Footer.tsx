
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { visa, googlePay, applePay, mc } from '@/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-primary-foreground py-8 lg:py-12'>
      <div className='container main-container'>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/*  */}
        <div className='grid gap-4'>
        <Link href='/' className='text-2xl lg:text-4xl font-extrabold'>
                ShopEase
          </Link>
          <p className='text-muted-foreground '>
          We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className='flex items-center gap-4'>
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
          </div>
        </div>
        {/*  */}
        <div className='grid gap-4'>
          <h3 className='text-lg lg:text-xl font-bold capitalize'>company</h3>
          <ul className='text-muted-foreground grid gap-3'>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        {/*  */}
        <div className="grid gap-4">
        <h3 className='text-lg lg:text-xl font-bold capitalize'>help</h3>
          <ul className='text-muted-foreground grid gap-3'>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*  */}
        <div className="grid gap-4">
        <h3 className='text-lg lg:text-xl font-bold capitalize'>FAQ</h3>
          <ul className='text-muted-foreground grid gap-3'>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        </div>
        <div className='border my-6 lg:my-10' />
        <div className='grid sm:grid-cols-2 '>
          <p className='text-center sm:text-start'>ShopEase © {new Date().getFullYear()}, All Rights Reserved</p>
          <div className="flex flex-wrap gap-3 items-center sm:justify-end justify-center">
            <Image src={visa} alt='visa' width={54} height={34}  />
            <Image src={mc} alt='mc' width={54} height={34} />
            <Image src={googlePay} alt='googlePay' width={54} height={34} />
            <Image src={applePay} alt='applePay' width={54} height={34} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer