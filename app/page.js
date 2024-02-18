import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";





export default function Home() {
  return (
   <>
        <h1 className={styles.title}>
          Welcome to Sirapop Shop
        </h1>
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
        <Image src="/shopping.svg" width={400} height={400} alt="logo"/>
      <p>Welcome to Next.js shopping</p>
      <Link href="/products" className={styles.btn} >All Products</Link>
   </div>  

   </>
  );
}

