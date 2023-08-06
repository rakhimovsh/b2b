import ProductCard from "@components/ProductCard/index.jsx";

import styles from './styles.module.css'
import { ReactComponent as ArrowIconLeft } from '@assets/svg/arrowIcon-left.svg';
import { ReactComponent as ArrowIconRight } from '@assets/svg/arrowIcon-right.svg';

const NewProduct = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Новейшие товары</h3>
        <div className={styles.newProductBox}>
          <button className={styles.arrowIcon_left}>
            <ArrowIconLeft />
          </button>
          <div className={styles.productCards}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
          <button className={styles.arrowIcon_right}>
            <ArrowIconRight />
          </button>
        </div>
        <button className={styles.newProduct_button}>Посмотреть больше продуктов</button>
      </div>
    </div>

  )
}

export default NewProduct