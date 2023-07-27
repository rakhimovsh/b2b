import styles from './styles.module.css'
import CountrySelect from './CountrySelect'

const HeroForm = () => {
  return (
    <div>
      <form className={styles.heroForm} action="">
        <h3 className={styles.heroForm_title}>
          Подать заявку на размещение продукта на оптовом рынке
        </h3>
        <p className={styles.formInput_name}>Ваше имя</p>
        <input type="text" placeholder='Ваше имя' className={styles.formClient_name} />
        <p className={styles.formInput_name}>Страна</p>
        <CountrySelect />
        <p className={styles.formInput_name}>Номер телефона</p>
        <input type="text" placeholder='(+998)' className={styles.formClient_name} />
        <p className={styles.formInput_name}>Название компании</p>
        <input type="text" placeholder='Название компании' className={styles.formClient_name} />
        <button className={styles.heroForm_button} >Отправить</button>
      </form>
    </div>
  )
}

export default HeroForm