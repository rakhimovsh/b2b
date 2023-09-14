import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import ProductCard from '@components/ProductCard/index.jsx';
import Carousel from '@components/Carousel/index.jsx';
import { getPopularProducts } from '@/redux/actions/product.js';
import styles from './styles.module.css';

const PopularProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    840: {
      items: 3,
    },
    950: {
      items: 3,
    },
  };

  const renderProductCards = (products) => {
    return products.map((product) => <div className={styles.carousel}><ProductCard product={product} key={product.id} /></div> );
  };
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Популярные товары</h3>
        
          <Carousel slides={renderProductCards(newProducts.items)} responsive={responsive} />
       
        
        <button onClick={() => navigate('/product')} className={styles.newProduct_button}>
          Посмотреть больше продуктов
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
