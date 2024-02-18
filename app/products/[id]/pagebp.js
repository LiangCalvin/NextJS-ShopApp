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
