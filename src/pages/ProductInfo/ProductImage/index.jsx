import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import NotFoundImg from '@assets/images/not-fount-img.png'

const ProductImage = ({images}) => {
  const [selectedImg, setSelectedImg] = useState(images[0])
  useEffect(() => {
    setSelectedImg(images[0])
  }, [images])
  return (
    <div>
      <div className={styles.productImage_box}>
        <img className={styles.productImage} src={images?.length ? selectedImg?.image : NotFoundImg} alt='product image' />
      </div>
      <div className={styles.productTypes}>
        {
          images?.map(img => (
            <img onClick={() => setSelectedImg(img)} key={img?.id} src={img?.image} alt='gray cap' width={100} height={100}/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductImage;
