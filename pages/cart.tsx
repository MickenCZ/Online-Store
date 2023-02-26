import { NextPage } from "next"
import Head from 'next/head'
import styles from "../styles/Cart.module.css"
import CartItem from "../components/cartItem"
import { useSelector } from "react-redux"
import { Iproduct } from "."

export interface Istate {
  products: Iproduct[],
}

const Cart: NextPage = () => {
  const products = useSelector((state: Istate) => state.products)
  return (<>
  <Head>
      <title>Shopping Cart</title>
  </Head>
  <main id={styles.main}>
    <h1 id={styles.title}>
      Shopping Cart Preview
    </h1>
    <section id={styles.cartItems}>
      {products.map((product, i) => <CartItem {...product} key={i} />)}
    </section>
     <h1 id={styles.total}>Your total is ${
      products.reduce((prev, curr) => {
      return prev + (curr.count * curr.price)
      }, 0).toFixed(2)}</h1>
      <button id={styles.buy}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Buy now!</a>
      </button>
  </main>
  </>)
}

export default Cart