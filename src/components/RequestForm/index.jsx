import React from 'react'
import styles from './styles.module.css'
import CountrySelect from '@components/CountrySelect'

const RequestForm = () => {
  return (
    <>
        <p className={styles.contactForm_p}>Ваше имя</p>
        <input className={styles.contactForm_name_input} type='text' placeholder='Ваше имя' />
        <p className={styles.contactForm_p}>Страна</p>
        <CountrySelect />
        <p className={styles.contactForm_p}>Email</p>
        <input className={styles.contactForm_name_input} type='text' placeholder='Enter your email' />
        <p className={styles.contactForm_p}>Какой продукт вы ищете?*</p>
        <textarea
          className={styles.contactForm_textarea}
          cols='30'
          rows='10'
          placeholder='Опишите продукт'
        ></textarea>
        <button className={styles.contactForm_btn}>Отправить</button>
    </>
  )
}

export default RequestForm