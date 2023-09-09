import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NotFoundImg from '@assets/images/not-fount-img.png';
import { ReactComponent as ArrowLeft } from '@assets/svg/arrowIcon-left.svg';
import { ReactComponent as ArrowRight } from '@assets/svg/arrowIcon-right.svg';

const ProductImage = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  useEffect(() => {
    setSelectedImg(images[0]);
  }, [images]);

  const onLeftBtnClick = () => {
    images.forEach((image, index) => {
      if (image?.id === selectedImg?.id) {
        if (index === 0) {
          setSelectedImg(images.at(-1));
        } else {
          setSelectedImg(images[index - 1]);
        }
      }
    });
  };

  const onRightBtnClick = () => {
    images.forEach((image, index) => {
      if (image?.id === selectedImg?.id) {
        if (index === images.length - 1) {
          setSelectedImg(images[0]);
        } else {
          setSelectedImg(images[index + 1]);
        }
      }
    });
  };
  return (
    <div>
      <div className={styles.productImage_box}>
        <button onClick={onLeftBtnClick} className={styles.btn + ' ' + styles.btnLeft}>
          <ArrowLeft className={styles.icon} />
        </button>
        <img
          className={styles.productImage}
          src={images?.length ? selectedImg?.image : NotFoundImg}
          alt='product image'
        />
        <button onClick={onRightBtnClick} className={styles.btn + ' ' + styles.btnRight}>
          <ArrowRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.productTypes}>
        {images?.map((img) => (
          <img
            className={selectedImg?.id === img?.id ? styles.blackBorder : ''}
            onClick={() => setSelectedImg(img)}
            key={img?.id}
            src={img?.image}
            alt='gray cap'
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
