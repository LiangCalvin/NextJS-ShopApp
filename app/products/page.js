import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Product.module.css"


async function getData(){
  const res = await fetch('https://dummyjson.com/products?limit=10')
  
  if (!res.ok){
      throw new Error('Failed to fetch data')
  }

  return res.json()
  }

export default async function Home() {
  const data = await getData()
  return (
    <div className={styles.container}>
        {data.products.map((product)=>(
            <div key={product.id} >
               <Link href={'/products/'+product.id}>
                  <h2 className={styles.title}>{product.title}</h2>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title} />
               </Link>
            </div>
        ))}
    </div>
  )
}
