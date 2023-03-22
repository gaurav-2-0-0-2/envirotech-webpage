import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';


export default function Contact() {  
    return(
        <div className=' bg-gray-300 py-10 px-10 '>
            <h1 className=' text-3xl text-center'>CONTACT US</h1>
            <div className='mx-auto mt-6 bg-gray-400 p-4 max-w-[50rem]'>
                <form className='flex flex-col gap-5'>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="" id="" cols="30" rows="3" placeholder='Message'></textarea>
                    <button className='bg-gray-200'>Send Message</button>
                </form>
            </div>
            <h1 className='text-center'>Or <a className='hover:underline' href="mailto:">Email</a></h1>
        </div>

    );
}