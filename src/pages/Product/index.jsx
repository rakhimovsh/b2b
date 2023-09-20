import React, { useState , useEffect} from 'react'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'
import CategoryFilter from './components/CategoryFilter'
import Sort from './components/Sort'
import Products from './components/Products'
import PlaceFilter from '../Producers/components/Filter/PlaceFilter'
import Country from './components/Country'
import Country2 from './components/Country2'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/product'

const Product = () => {
  const dispatch = useDispatch()
  const [country , setCountry] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const search = searchParams.get('search') || '';
  const subcategoryId = searchParams.get('subcategoryId') || '';

  useEffect(() => {
    dispatch(getProducts(search, subcategoryId ? [+subcategoryId] : [], country));

  }, [search, subcategoryId, country]);

  return (
    <div className={'container ' + styles.filterBlock}>
      <div className={styles.filterbox}>
        {/* <Country /> */}
        <Country2 setCountry={setCountry}/>
        <CategoryFilter  country={country}/>
        {/* <Sort />         */}
      </div>
      <Products country={country}/>
    </div>
  )
}

export default Product