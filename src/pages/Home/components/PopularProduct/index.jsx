import { useNavigate } from 'react-router-dom';
import ProductCard from '@components/ProductCard/index.jsx';

import styles from './styles.module.css';
import Carousel from '@components/Carousel/index.jsx';

const slides = [
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
];
const PopularProduct = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Популярные товары</h3>
        <Carousel slides={slides} />
        <button onClick={() => navigate('/application')} className={styles.newProduct_button}>
          Посмотреть больше продуктов
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
