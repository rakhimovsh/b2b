import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

import PhoneImg from '@assets/images/phone.png'
import { useTranslation } from 'react-i18next'


const ContactUs = () =>{
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          {t('aboutUs.contact.title')}
        </h3>
        <p className={styles.desc}>
        {t('aboutUs.contact.text')}
        </p>
        <img className={styles.img2} src={PhoneImg} alt='phone'/>
        <button onClick={() => navigate('/contact-us')} className={styles.btn}>
        {t('aboutUs.contact.button')}
        </button>
      </div>
      <img className={styles.img} src={PhoneImg} alt='phone'/>
    </div>
  )
}

export default ContactUs