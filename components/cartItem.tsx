import { FunctionComponent } from "react"
import { Iproduct } from "../pages"
import Image from "next/image"
import styles from "../styles/CartItem.module.css"
import { increaseCount, decreaseCount } from "../features/productsSlice"
import { useDispatch } from "react-redux"

const CartItem:FunctionComponent<Iproduct> = (product) => {
  const dispatch = useDispatch()
  return (<>
    <div className={styles.cartItem}>
      <span className={styles.imageContainer}>
        <Image src={product.image} alt={product.title} width={"100px"} height={"100px"} />
      </span>
      <span className={styles.title}>{product.title}</span>
      <span className={styles.controls}>
        <button className={styles.buttonAdd} onClick={
          () => {dispatch(increaseCount(product.id))}} 
          >+</button>
        <span className={styles.count}>{product.count}</span>
        <button className={styles.buttonRemove} onClick={
          () => {dispatch(decreaseCount(product.id))}
        } >-</button>
      </span>
      <span className={styles.price}>${product.price}</span>
    </div>
  </>)
}

export default CartItem