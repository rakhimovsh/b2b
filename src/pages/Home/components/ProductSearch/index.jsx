import styles from './styles.module.css'


import BoxImage from '@assets/images/box-image.png'
import GraphChartImage from '@assets/images/graphChartImage.png'
import Searchproduct from '@components/SearchProduct'
const ProductSearch = () => {
  return (
    <div className={'container ' + styles.productSearch_container}>
      <Searchproduct />
      <div className={styles.productSearchCard}>
        <h3 className={styles.addCompany_title}>Станьте поставщиком на рынке B2B, и продавайте свои продукты</h3>
        <p className={styles.addCompany_text}>Станьте поставщиком на рынке B2B</p>
        <button className={styles.productSearch_button}>+ Добавить свою компанию</button>
        <p className={styles.addCompany_item1}>+560</p>
        <p className={styles.addCompany_item2}>производителей</p>
        <img className={styles.search_boxImage} src={GraphChartImage} alt="chart" />
      </div>
    </div>
  )
}

export default ProductSearch