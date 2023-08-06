import React from 'react'
import styles from './styles.module.css'
import AppImage from '@assets/images/applicationImage.png'
import TickIcon from '@assets/svg/tickIcon.svg'
import TickIconBg from '@assets/svg/tickIconBg.svg'

const Application = () => {
  return (
    <div className={'container ' + styles.application}>
        <div className={styles.applicationForm}>
            <h2 className={styles.applicationTitle}>Подать заявку на размещение продукта на оптовом рынке</h2>
            <div>
                <p className={styles.applicationItem}>Ваше имя</p>
                <input className={styles.applicationInput} type="text" placeholder='Ваше имя' />
            </div>
            <div>
                <p className={styles.applicationItem}>Страна</p>
                <select className={styles.countrySelect} name="country" >
                    <option  value="uzbekistan">Uzbekistan</option>
                </select>
            </div>
            <div>
                <p className={styles.applicationItem}>Номер телефона</p>
                <input className={styles.applicationInput} type="text" placeholder='+998' />
            </div>
            <div>
                <p className={styles.applicationItem}>Название компании:</p>
                <input className={styles.applicationInput} type="text" placeholder='Название вашей компании' />
            </div>  
            <button className={styles.applicationButton}>Отправить</button>
        </div>
        <div>
            <img src={AppImage} alt="app image" />
        </div>
        <div style={{display: 'none'}}>
            <div className={styles.successPromt}>
                <div className={styles.promtIcon}>
                    <img src={TickIconBg} alt="" />
                    <img className={styles.tickIcon} style={{position: 'absolute'}} src={TickIcon} alt="tick icon" /> 
                </div>  
                <p className={styles.promtText}>заявка успешно отправлена</p>
            </div>
        </div>
        
    </div>
  )
}

export default Application