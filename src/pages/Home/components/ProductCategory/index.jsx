import styles from './styles.module.css';

import categoryImg1 from '@assets/images/thread.png';
import categoryImg2 from '@assets/images/tshirtsmall.png';
import categoryImg3 from '@assets/images/roller.png';
import categoryImg4 from '@assets/images/belt.png';
import categoryImg5 from '@assets/images/shoes.png';
import categoryImg6 from '@assets/images/molotok.png';

const ProductCategory = () => {
  return (
    <div className={'container ' + styles.productCategoryContainer}>
      <h3 className={styles.productCategory_title}>Просмотрите товары по категориям</h3>
      <div className={styles.productCategory_box}>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img src={categoryImg1} style={{ borderRadius: '50%' }} alt='thread' />
          </div>
          <p className={styles.productCategory_name}>Ткани, нить & аксессуары</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img
              src={categoryImg2}
              style={{ borderRadius: '50%', marginLeft: '5px' }}
              alt='thread'
            />
          </div>
          <p className={styles.productCategory_name}>Трикотажный изделия</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img src={categoryImg3} style={{ borderRadius: '50%' }} alt='thread' />
          </div>
          <p className={styles.productCategory_name}>Для дома</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img src={categoryImg4} style={{ borderRadius: '50%' }} alt='thread' />
          </div>
          <p className={styles.productCategory_name}>Кожаные изделия</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img src={categoryImg5} style={{ borderRadius: '50%' }} alt='thread' />
          </div>
          <p className={styles.productCategory_name}>Оптовая обувь</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
        <div className={styles.productCategory_card}>
          <div className={styles.productImage2_bg}>
            <img src={categoryImg6} style={{ borderRadius: '50%' }} alt='thread' />
          </div>
          <p className={styles.productCategory_name}>Строительные материалы</p>
          <p className={styles.productCategory_text}>Хлопковая пряжа</p>
          <p className={styles.productCategory_text}>Ткани</p>
          <p className={styles.productCategory_text}>Аксессуары</p>
          <p className={styles.productCategory_text}>Другие продукты</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
