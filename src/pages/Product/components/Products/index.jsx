import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {useNavigate, useSearchParams} from 'react-router-dom';
import styles from './styles.module.css';
import RatingStars from '@components/RatingStars';
import { getProducts } from '@/redux/actions/product.js';
import ProductCard from '../../../../components/ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { products } = useSelector((state) => state.product);
  const lang = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  const search = searchParams.get('search') || '';
  const subcategoryId = searchParams.get('subcategoryId') || '';
  useEffect(() => {
    dispatch(getProducts(search, subcategoryId ? [+subcategoryId] : []));
  }, [search, subcategoryId]);

  return (
    <div className={styles.productsContainer}>
      {products.items.length ? (
        products.items?.map((product) => (
          <div onClick={() => navigate(`/company/product-info/${product?.id}`)} key={product?.id} className={styles.productsCard}>
            <img className={styles.productImage} src={product.images[0]?.image} alt='product' />
            <p className={styles.productName}>{product.translations[lang]?.name}</p>
            <p style={{marginBottom: '10px', color: '#1876F2'}}>{product?.category?.translations[lang]?.name}</p>
            <RatingStars rating={product?.average_rating || 0} />
          </div>
        ))
        // <ProductCard product={products}/>
      ) : (
        <h3>Ничего не найдено</h3>
      )}
    </div>
  );
};

export default Products;
