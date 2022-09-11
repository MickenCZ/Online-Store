import { FunctionComponent } from "react";
import { Iproduct } from "../pages/index";
import styles from "../styles/Product.module.css"
import Image from "next/image";
import Link from "next/link";

const Product: FunctionComponent<Iproduct> = ({id, title, price, description, category, image, rating}) => {
  return (<>
  <Link href={"/products/" + id.toString()}>
    <div className={styles.productContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.image}>
        <Image src={image} alt={title} width="300px" height="300px" />
      </div>
    <div className={styles.price}>
    ${price}
    </div>
    </div>
  </Link>
  </>)
}

export default Product