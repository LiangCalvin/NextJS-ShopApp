import React from "react"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

async function getData(id){
    const res = await fetch('https://dummyjson.com/products/'+id)
    return res.json()
}

export default async function ProductDetail({params}) {
    const data = await getData(params.id)
    console.log(data)
  return (
    <>
    <div className={styles.container}>
        <div>
          <Image src={data.thumbnail} width={300} height={300} alt={data.title}/>
        </div>
        <div className={styles.detail}>
            <h1>{data.title} </h1>
            <p>Price: {data.price}</p>
            <p>Category: {data.category}</p>
            <p>Description: {data.description}</p>
            <p>Brand: {data.brand}</p>
        </div>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json()
  const products = data.products

  const paths = products.map((product)=>({
    params: {id:String(product.id)}
  }))
  return {
    paths,
    fallback: false, // Set to true if you want to enable fallback behavior
  };
}

export async function getStaticProps({ params }) {
  
  const res = await fetch(`https://dummyjson.com/products"${params.id}`);

  const product = await res.json();

  // Pass the fetched data as props to the page component
  return {
    props: {
      product,
    },
  };
}