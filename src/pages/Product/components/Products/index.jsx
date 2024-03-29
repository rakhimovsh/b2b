import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {useNavigate, useSearchParams} from 'react-router-dom';
import styles from './styles.module.css';
import RatingStars from '@components/RatingStars';
import { getProducts } from '@/redux/actions/product.js';
import ProductCard from '../../../../components/ProductCard';

const Products = ({country}) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const {t} = useTranslation()
  const { products } = useSelector((state) => state.product);
  const lang = i18n.language;
  // const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate()
  // // const [country , setCountry] = useState();

  // const search = searchParams.get('search') || '';
  // const subcategoryId = searchParams.get('subcategoryId') || '';

  // useEffect(() => {
  //   dispatch(getProducts(search, subcategoryId ? [+subcategoryId] : [], country));

  // }, [search, subcategoryId, country]);

  return (
    <div className={styles.productsContainer}>
      {products.items.length ? (
        products.items?.map((product) => (
          // <div onClick={() => navigate(`/company/product-info/${product?.id}`)} key={product?.id} className={styles.productsCard}>
          //   <img className={styles.productImage} src={product.images[0]?.image} alt='product' />
          //   <p className={styles.productName}>{product.translations[lang]?.name}</p>
          //   <p style={{marginBottom: '10px', color: '#1876F2'}}>{product?.category?.translations[lang]?.name}</p>
          //   <RatingStars rating={product?.average_rating || 0} />
          // </div>
          <div key={product?.id} className={styles.productCard_box}>
            <ProductCard product={product} />
          </div>
          
        ))
        
      ) : (
        <h3>{t('products.empty')}</h3>
      )}
    </div>
  );
};

export default Products;
