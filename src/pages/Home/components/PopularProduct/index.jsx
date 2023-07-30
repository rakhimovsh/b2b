import ProductCard from '@components/ProductCard/index.jsx';
import styles from './styles.module.css';

const PopularProduct = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Популярные товары</h3>
        <ProductCard />
        <button className={styles.newProduct_button}>Посмотреть больше продуктов</button>
      </div>
    </div>
  );
};

export default PopularProduct;
