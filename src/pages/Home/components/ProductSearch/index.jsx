import styles from './styles.module.css'


import BoxImage from '@assets/images/box-image.png'
import GraphChartImage from '@assets/images/graphChartImage.png'
const ProductSearch = () => {
  return (
    <div className={'container ' + styles.productSearch_container}>
      <div className={styles.productSearchCard}>
        <h3 className={styles.productSearch_title}>Пользуйтесь B2B чтобы найти продукт</h3>
        <div className={styles.productSearch_inputs}>
          {/*<div style={{marginBottom: '8px', marginTop: '34px'}}><HeroCategorySlct width='420px' name='Категория продуктов'/></div>*/}
          {/*<div style={{marginBottom: '8px'}}><HeroCategorySlct width='420px' name='Подкатегория продуктов'/></div>*/}
          <input type="text" placeholder='Введите название продукта' className={styles.productName_input} />

        </div>
        <button className={styles.productSearch_button}>Посмотреть все продукты</button>
        <img className={styles.search_boxImage} src={BoxImage} alt="box" />
      </div>
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