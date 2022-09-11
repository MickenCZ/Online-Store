import { useRouter } from "next/router";
import type { NextPage } from 'next'
import Head from 'next/head'
import { Iproducts } from "../index";
import { Iproduct } from "../index";
import styles from "../../styles/ProductPage.module.css"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add } from "../../features/productsSlice";

const ProductPage: NextPage<Iproducts> = ({products}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query
  const product:Iproduct = products.filter(prod => prod.id.toString() === id)[0]
  return (
    <>
    <Head>
      <title>{"My Fake Store | " + product.title}</title>
    </Head>
    <main id={styles.main}>
      <section id={styles.imageSection}>
        <Image alt="Product image" src={product.image} height={"500px"} width={"500px"} />
      </section>
      <section id={styles.infoSection}>
        <h1 id={styles.title}>{product.title}</h1>
        <div id={styles.container}>
            <div id={styles.description}>{product.description}</div>
            <div id={styles.rating}>Rated {product.rating.rate}/5
            <Image alt="star" src="/star-solid.svg" height={"27px"} width={"27px"} />
            <   > by</> {product.rating.count} Reviews</div>
            <div id={styles.price}>${product.price}</div>
            <button className={styles.button} onClick={() => {
                dispatch(add(product))
              }}>Add to cart!</button>
        </div>
      </section>
    </main>
    </>
  )
}

export default ProductPage

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return {
    props: {
      products:products
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products")
  const products: any[] = await response.json()
  const paths = products.map(product => {
    return {
      params: { id: product.id.toString() }
    }
  })

  return {
    paths:paths,
    fallback: false,  
  }
}