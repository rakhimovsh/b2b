import styles from './styles.module.css';


import {ReactComponent as PlusSvg} from '@assets/svg/plusSvg.svg'


const FAQ = () => {
  return (
    <div className={'container ' + styles.faqContainer}>
      <h4 className={styles.faqTitle}>Часто задаваемые вопросы</h4>
      <div>
        <div className={styles.faqQuestion}>
          <p className={styles.faqText}>Правила организации командировок водителей в случаях перевозки, включающих пустые рейсы</p>
          <button className={styles.faqButton}><PlusSvg/></button>
        </div>
        <div className={styles.faqQuestion}>
          <p className={styles.faqText}>Использование электрогрузовиков снижает загрязнение окружающей среды на 63% по сравнению с их дизельными аналогами в соответствии с ICCT.</p>
          <button className={styles.faqButton}><PlusSvg/></button>
        </div>
        <div className={styles.faqQuestion}>
          <p className={styles.faqText}>Особенности транспортировки грузов в Европе</p>
          <button className={styles.faqButton}><PlusSvg/></button>
        </div>
        <div className={styles.faqQuestion}>
          <p className={styles.faqText}>Правила организации командировок водителей в случаях перевозки, включающих пустые рейсы</p>
          <button className={styles.faqButton}><PlusSvg/></button>
        </div>
        <div className={styles.faqQuestion}>
          <p className={styles.faqText}>Особенности транспортировки грузов в Европе</p>
          <button className={styles.faqButton}><PlusSvg/></button>
        </div>
      </div>
    </div>
  )
}

export default FAQ