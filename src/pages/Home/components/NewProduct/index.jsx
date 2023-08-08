import {useNavigate} from "react-router-dom";
import styles from './styles.module.css';
import Carousel from '@components/Carousel/index.jsx';
import ProductCard from "@components/ProductCard/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNewProducts} from "@/redux/actions/product.js";


const slides = [
  <ProductCard/>,
  <ProductCard/>,
  <ProductCard/>,
  <ProductCard/>,
  <ProductCard/>,
  <ProductCard/>,
];
const NewProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {newProducts} = useSelector(state => state.product)
  console.log(newProducts)
  useEffect(() =>{
    dispatch(getNewProducts())
  }, [])
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Новейшие товары</h3>
        <Carousel slides={slides} />
        <button onClick={()=> navigate('/application')} className={styles.newProduct_button}>Посмотреть больше продуктов</button>
      </div>
    </div>
  );
};

export default NewProduct;
