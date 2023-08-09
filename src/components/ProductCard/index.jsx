import styles from './styles.module.css';

import RatingStars from '../RatingStars';
import {useTranslation} from "react-i18next";

const ProductCard = ({product}) => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  return (
    <div className={styles.newProduct_card}>
      <div className={styles.newProduct_image}>
        <img className={styles.newProduct_img} src={product?.image} alt='product-img' />
      </div>
      <p className={styles.productCard_name}>{product?.translations[lang]?.name}</p>
      <a href='#product' className={styles.productCard_category}>
        Футболки
      </a>
      <RatingStars />
    </div>
  )
};

export default ProductCard;
