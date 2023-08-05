import styles from './styles.module.css';

import RatingStars from '../RatingStars';

const ProductCard = () => {
  return (
    <div className={styles.newProduct_card}>
      <div className={styles.newProduct_image}>
        <img className={styles.newProduct_img} src={'https://picsum.photos/600'} alt='product-img' />
      </div>
      <p className={styles.productCard_name}>Футболки – для мужчин и женщин</p>
      <a href='#product' className={styles.productCard_category}>
        Футболки
      </a>
      <RatingStars />
    </div>
  )
};

export default ProductCard;
