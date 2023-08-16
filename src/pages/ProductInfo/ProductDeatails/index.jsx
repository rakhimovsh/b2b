import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import CompanyContact from '../CompanyContact';
import ProductDescription from '../ProductDescription';
import RatingStars from '@components/RatingStars/index.jsx';

const ProductDetails = ({ details }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div className={styles.productData}>
      <div className={styles.productDetails_conatiner}>
        <h2 className={styles.productName}>{details?.translations[lang].name}</h2>
        {details?.average_rating ? (
          <span className={styles.productRating}>
            <RatingStars rating={details?.average_rating} isEditable={false}/> {details?.average_rating} рейтинг
          </span>
        ) : null}
        <div className={styles.productDetails}>
          <ProductDescription compound={details?.translations[lang].compound} />
          <div>
            <p className={styles.description}>Категории</p>
            <div className={styles.productCategory}>
              <button className={styles.productCategory_button}>{details?.category?.translations[lang]?.name}</button>
            </div>
          </div>
          <div>
            <p className={styles.description}>Метки</p>
            <div className={styles.productCategory}>
              <button className={styles.productCategory_button}>{details?.translations[lang]?.tag}</button>
            </div>
          </div>
        </div>
      </div>
      <CompanyContact companyId={details?.campany}/>
    </div>
  );
};

export default ProductDetails;
