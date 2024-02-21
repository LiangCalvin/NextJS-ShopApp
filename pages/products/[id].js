import React from 'react'
import Image from "next/image"
import styles from "@/styles/Detail.module.css"
import Head from "next/head";

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
  return {
    paths,
    fallback: false}
  
}

export async function getStaticProps({params}) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
  return {
    props:{product:data}
  }
}

export default function ProductDetail({product}) {
  return (
    <>
    <Head>
          <title>SirapopNEXT</title>
      </Head>
        <div className={styles.container}>
        <div>
          <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
        </div>
        <div className={styles.detail}>
            <h1>{product.title} </h1>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Brand: {product.brand}</p>
        </div>
    </div>
    </>
  )
}