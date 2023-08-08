import styles from './styles.module.css';
import Carousel from '@components/Carousel/index.jsx';
import ProductCard from "@components/ProductCard/index.jsx";

const NewProduct = () => {
  const handleDragStart = (e) => e.preventDefault();
  const slides = [
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
  ];
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Новейшие товары</h3>
        {/*<div className={styles.newProductBox}>*/}
        {/*  <button className={styles.arrowIcon_left}>*/}
        {/*    <ArrowIconLeft />*/}
        {/*  </button>*/}
        {/*  <ProductCard/>*/}
        {/*  <ProductCard/>*/}
        {/*  <ProductCard/>*/}
        {/*  <ProductCard/>*/}
        {/*  <button className={styles.arrowIcon_right}>*/}
        {/*    <ArrowIconRight />*/}
        {/*  </button>*/}
        {/*</div>*/}
        <Carousel slides={slides} />
        <button className={styles.newProduct_button}>Посмотреть больше продуктов</button>
      </div>
    </div>
  );
};

export default NewProduct;
