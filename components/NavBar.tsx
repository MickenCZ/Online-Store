import Image from "next/image"
import styles from "../styles/NavBar.module.css"
import Link from "next/link"
import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { Istate } from "../pages/cart"

const Navbar:FunctionComponent = () => {
  const products = useSelector((state: Istate) => state.products)
  const count = products.reduce((prev, current) => {
    return prev + current.count
  }, 0)
  return (<nav id={styles.nav}>
      <Link href="/">
        <div id={styles.storeIcon}>
          <Image src="/store-solid.svg" alt="store icon" width={"60px"} height={"60spx"} />
        </div>
      </Link>
      <header id={styles.header}>My Store</header>
      <Link href={"/cart"}>
        <span id={styles.cartIcon}>
          <Image src="/cart-shopping-solid.svg" width={"60px"} height={"60px"} alt="Shopping cart" />
        </span>
    </Link>
    <span id={styles.productsCount}>{count}</span>
  </nav>)
}

export default Navbar