import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { Dropdown } from "@nextui-org/react";


export default function Header() {

    return(
        <div className='bg-cyan-500'>
        <div className='flex flex-row justify-between mx-2 py-10 md:px-10 px-4'>
        <h1 className='md:text-3xl text-2xl font-bold text-teal-800'>ENVIROTECH</h1>
          <Dropdown>
            <Dropdown.Button className='rounded-none bg-cyan-400'></Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item key="home">HOME</Dropdown.Item>
              <Dropdown.Item key="about">ABOUT US</Dropdown.Item>
              <Dropdown.Item key="product">PRODUCTS</Dropdown.Item>
              <Dropdown.Item key="contact">CONTACT US</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
          
      </div>
    )
}