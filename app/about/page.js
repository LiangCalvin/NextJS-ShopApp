import React from 'react';
import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";


export default function about() {
  return (
    <>
     <Head>
          <title>SirapopNEXT</title>
      </Head>
    <div className={styles.container}>
    <h1 h1 className={styles.title}>About</h1>
      <Image src="/about.svg" width={400} height={400} alt="logo"/>
    </div>
    </> 
  )
}
