import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
import GraphChartImage from '@assets/images/graphChartImage.png'

const CreateCompany = () => {
  const navigate = useNavigate()
  return (
        <div data-aos="fade-left" className={styles.productSearchCard}>
            <h3 className={styles.addCompany_title}>Станьте поставщиком на рынке B2B, и продавайте свои продукты</h3>
            <p className={styles.addCompany_text}>Станьте поставщиком на рынке B2B</p>
            <button onClick={()=> navigate('/application')} className={styles.productSearch_button}>+ Добавить свою компанию</button>
            <p className={styles.addCompany_item1}>+560</p>
            <p className={styles.addCompany_item2}>производителей</p>
            <img className={styles.search_boxImage} src={GraphChartImage} alt="chart" />
        </div>
  )
}

export default CreateCompany