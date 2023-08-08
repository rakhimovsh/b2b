import CountrySelect from '@components/CountrySelect/'
import styles from './styles.module.css'


const HeroForm = () => {
  return (
    <div className={styles.formContainer}>
        <h3 className={styles.heroForm_title}> Подать заявку на размещение продукта на оптовом рынке</h3>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Ваше имя</p>
          <input type="text" placeholder='Ваше имя' className={styles.formClient_name} />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Страна</p>
          <CountrySelect />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Номер телефона</p>
          <input type="text" placeholder='(+998)' className={styles.formClient_name} />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Название компании</p>
          <input type="text" placeholder='Название компании' className={styles.formClient_name} />
        </div>
        
        <button className={styles.heroForm_button} >Отправить</button>
    </div>
  )
}

export default HeroForm