import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {useSearchParams} from "react-router-dom";
import styles from './styles.module.css';
import RatingStars from '@components/RatingStars';
import { getProducts } from '@/redux/actions/product.js';

const Products = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { products } = useSelector((state) => state.product);
  const lang = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') || ''
  useEffect(() => {
    dispatch(getProducts(search));
  }, [search]);
  return (
    <div className={styles.productsContainer}>
      {products.items?.map((product) => (
        <div key={product?.id} className={styles.productsCard}>
          <img className={styles.productImage} src={product.images[0]?.image} alt='product' />
          <p className={styles.productName}>{product.translations[lang]?.name}</p>
          <p>{product.translations[lang]?.compound}</p>
          <RatingStars rating={product?.average_rating || 0} />
        </div>
      ))}
    </div>
  );
};

export default Products;
