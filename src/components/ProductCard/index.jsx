import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { getImage } from '@/utils/api.js';
import { truncateString } from '@/utils/truncateString.js';
import {getCompaniesById} from "@/redux/actions/company.js";
import Countries from "@/data/countries.js"
import styles from './styles.module.css';

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {sortedCompanies} = useSelector(state => state.company)
  const {i18n} = useTranslation()
  const lang = i18n.language;

  const handleClick = () => {
    navigate(`/company/product-info/${product.id}`)
  }

  useEffect(() => {
    dispatch(getCompaniesById(product?.company))
  }, [product])

  const findCountry = Countries.find(c => c.code === sortedCompanies[product?.company]?.country)
  return (
    <div id={product?.id} onClick={handleClick} className={styles.newProduct_card}>
      <div className={styles.newProduct_image}>
          <img className={styles.newProduct_img} src={getImage(product?.images[0]?.image)} alt='product-img' />
          {/* <img className={styles.newProduct_img} src={JarTwist2} alt='product-img' /> */}
      </div>
      <p className={styles.productCard_name}>
        {truncateString(product?.translations[lang]?.name, 30)}
      </p>
      <p className={styles.productCard_category}>
        {product?.item?.category?.translations[lang]?.name} 
      </p>
      <p className={styles.company}>
        {/* <CompanyIcon/> */}
        {truncateString(sortedCompanies[product?.company]?.name, 25)}
      </p>
      <p className={styles.country}>
        <img width={16} src={`https://flagsapi.com/${sortedCompanies[product?.company]?.country}/flat/64.png`} alt='location' />
        {findCountry?.name}
      </p>
      <p className={styles.productDescription}>{truncateString(product?.translations[lang]?.short_description, 110)}</p>
      {/*<RatingStars rating={product?.average_rating} setRating={()=> {}} isEditable={false} />*/}
    </div>
  )
};

export default ProductCard;
