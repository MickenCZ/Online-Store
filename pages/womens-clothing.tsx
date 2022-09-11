import type { NextPage } from 'next'
import Head from 'next/head'
import Product from '../components/Product'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Iproducts } from './index'

const WomensClothing: NextPage<Iproducts> = ({products}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Women&apos;s clothing</title>
        <meta name="description" content="Store with Next.js and React" />
      </Head>
      <main id={styles.main}>
        <>
        <section id={styles.buttons}>
          <Link href={"/electronics"}><button className={styles.button}>Electronics</button></Link>
          <Link href={"/jewelery"}><button className={styles.button}>Jewelery</button></Link>
          <Link href={"mens-clothing"}><button className={styles.button}>Men&apos;s clothing</button></Link>
          <Link href={"/womens-clothing"}><button className={styles.button}>Women&apos;s clothing</button></Link>
          <Link href={"/"}><button className={styles.button}>All</button></Link>
        </section>
        <h1 id={styles.heading}>
          Check out our latest range of products!
        </h1>
        <section id={styles.products}>
          {products.filter(product => product.category === "women's clothing").map((product, i) => {
            return <Product {...product} key={i} />
          })}
        </section>
        </>
      </main>
    </div>
  )
}

export default WomensClothing

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return {
    props: {
      products:products
    }
  }
}