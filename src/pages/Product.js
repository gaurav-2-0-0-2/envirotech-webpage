import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import {items} from "../../lib/data";



export default function Product() {  
//    console.log(data);
    return(
        <div className='text-center pt-10 bg-slate-200 '>
            <h1 className='text-3xl mb-10'>OUR PRODUCTS</h1>
            <div className='md:grid md:grid-flow-col'>
               {
                items.map((item)=>{
                     return(
                        <div key={item.id}>
                            <img src={item.img} className="mx-auto" width={150} alt="1" />
                            <h1>{item.price}</h1>
                            <p>{item.desc}</p>
                        </div>
                     )
                })
               }
            </div>
        </div>
    );
}