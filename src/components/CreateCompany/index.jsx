import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
import GraphChartImage from '@assets/images/graphChartImage.png'
import { useTranslation } from "react-i18next";

const CreateCompany = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
        <div data-aos="fade-left" className={styles.productSearchCard}>
            <h3 className={styles.addCompany_title}>{t('home.addCompany.title')}</h3>
            <p className={styles.addCompany_text}>{t('home.addCompany.text')}</p>
            <button onClick={()=> navigate('/application')} className={styles.productSearch_button}>{t('home.addCompany.button')}</button>
            <p className={styles.addCompany_item1}>{t('home.addCompany.producerCount')}</p>
            <p className={styles.addCompany_item2}>{t('home.addCompany.producers')}</p>
            <img className={styles.search_boxImage} src={GraphChartImage} alt="chart" />
        </div>
  )
}

export default CreateCompany