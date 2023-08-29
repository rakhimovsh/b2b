import styles from './styles.module.css';

import RatingStars from '../RatingStars';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import { getImage } from '@/utils/api.js';
import { truncateString } from '../../utils/truncateString';

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {i18n} = useTranslation()
  const lang = i18n.language

  const handleClick = () => {
    navigate(`/company/product-info/${product.id}`)
  }

  return (
    <div id={product?.id} onClick={handleClick} className={styles.newProduct_card}>
      <div className={styles.newProduct_image}>
          <img className={styles.newProduct_img} src={getImage(product?.images[0]?.image)} alt='product-img' />
      </div>
      <p className={styles.productCard_name}>
        {truncateString(product?.translations[lang]?.name, 30)}
      </p>
      <p className={styles.productCard_category}>
        {product?.item?.category?.translations[lang]?.name} 
      </p>
      <RatingStars rating={product?.average_rating} setRating={()=> {}} isEditable={false} />
    </div>
  )
};

export default ProductCard;
