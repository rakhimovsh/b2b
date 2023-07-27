import styles from './styles.module.css';

import Product1Img from '@assets/images/product1.png';
import Product2Img from '@assets/images/product2.png';
import Product3Img from '@assets/images/product3.png';
import Product4Img from '@assets/images/product4.png';
import { ReactComponent as StarSVG } from '@assets/svg/StarSVG.svg';
import { ReactComponent as ArrowIconLeft } from '@assets/svg/arrowIcon-left.svg';
import { ReactComponent as ArrowIconRight } from '@assets/svg/arrowIcon-right.svg';

const productData = [
  {
    image: Product1Img,
  },
  {
    image: Product2Img,
  },
  {
    image: Product3Img,
  },
  {
    image: Product4Img,
  },
];

const ProductCard = () => {
  return (
    <div className={styles.newProductBox}>
      <button className={styles.arrowIcon_left}>
        <ArrowIconLeft />
      </button>
      {productData.map((productDetails) => {
        return (
          <div className={styles.newProduct_card}>
            <div className={styles.newProduct_image}>
              <img src={productDetails.image} alt='product-img' />
            </div>
            <p className={styles.productCard_name}>Футболки – для мужчин и женщин</p>
            <a href='#product' className={styles.productCard_category}>
              Футболки
            </a>
            <div>
              <button className={styles.productCard_star}>
                <StarSVG />
              </button>
              <button className={styles.productCard_star}>
                <StarSVG />
              </button>
              <button className={styles.productCard_star}>
                <StarSVG />
              </button>
              <button className={styles.productCard_star}>
                <StarSVG />
              </button>
              <button className={styles.productCard_star}>
                <StarSVG />
              </button>
            </div>
          </div>
        );
      })}
      <button className={styles.arrowIcon_right}>
        <ArrowIconRight />
      </button>
    </div>
  );
};

export default ProductCard;
