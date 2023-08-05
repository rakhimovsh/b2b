import styles from './styles.module.css'
import ProductCard from "@components/ProductCard/index.jsx";
import EmptyProducts from "../EmptyProducts";
import Recommended from "@pages/CompanyInfo/components/Recommended/index.jsx";


const Products = () =>{
  return (
    <>
      {/*<h2 className={styles.productsTitle}>*/}
      {/*  Все товары*/}
      {/*</h2>*/}
      {/*<div className={styles.productsList}>*/}
      {/*  <ProductCard/>*/}
      {/*  <ProductCard/>*/}
      {/*  <ProductCard/>*/}
      {/*  <ProductCard/>*/}
      {/*  <ProductCard/>*/}
      {/*  <ProductCard/>*/}
      {/*</div>*/}
      <EmptyProducts/>
      <Recommended/>
    </>
  )
}


export default Products