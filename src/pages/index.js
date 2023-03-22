import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Dropdown } from "@nextui-org/react";
import Header from './Header';
import About from './About';
import Product from './Product';
import Contact from './Contact';




export default function Home() {

  return (
    <div>
      <Header />
      <div className='md:grid md:grid-flow-col m-10'>
        <div className='ml-10'>
          <Image className='mr-0' src="/logo.png" alt="logo" width={350} height={150} />
        </div>
        <div className='md:mt-16'>
        <h1 className='text-2xl text-center md:text-left md:text-5xl mb-10  font-bold text-cyan-600'>
          LOREM IPSUM DOLAR SET AMET
        </h1>
        <p className="text-center max-w-[40rem] md:text-2xl md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget consequat lectus, et sagittis justo. Phasellus dapibus gravida efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        </p>
        </div>
        
      </div>

      <About />
      <Product />
      <Contact />
    </div>
  )
}




