import React from 'react'
import Link from 'next/link';
import styles from "@/styles/Product.module.css"
import Image from 'next/image';
import Head from "next/head";

   
  export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products?limit=10')
    const data = await res.json()
   
    return {
      props: {
        products: data.products,
      },
    }
  }

  export default function index({products}) {
    return (
      <>
       <Head>
          <title>SirapopNEXT</title>
      </Head>
      <div className={styles.container}>
      {products.map((product)=>(
            <div key={product.id} >
              <Link href={'/products/'+product.id}>
                  <h2 className={styles.title}>{product.title}</h2>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title} />
              </Link>
            </div>
        ))}
      </div>
        
      </>
    )
  }
  