import styles from './styles.module.css';

import RatingStars from '../RatingStars';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {i18n} = useTranslation()
  const lang = i18n.language

  const handleClick = () => {
    navigate(`/company/product-info/${product.id}`)
  }
  console.log(product);
  return (
    <div onClick={handleClick} className={styles.newProduct_card}>
      <div className={styles.newProduct_image}>
        <img className={styles.newProduct_img} src={product?.images[0]?.image} alt='product-img' />
      </div>
      <p className={styles.productCard_name}>{product?.translations[lang]?.name}</p>
      <p className={styles.productCard_category}>
        Футболки
      </p>
      <RatingStars ratingCount={product?.average_rating} />
    </div>
  )
};

export default ProductCard;
