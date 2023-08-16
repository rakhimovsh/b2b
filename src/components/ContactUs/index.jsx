import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

import PhoneImg from '@assets/images/phone.png'


const ContactUs = () =>{
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          Мы готовы помочь вам в трудный момент
        </h3>
        <p className={styles.desc}>
          Если вы ищете товары оптом, не стесняйтесь обращаться к нам для запроса продукта, мы здесь, чтобы помочь
        </p>
        <img className={styles.img2} src={PhoneImg} alt='phone'/>
        <button onClick={() => navigate('/contact-us')} className={styles.btn}>
          Связаться с нами
        </button>
      </div>
      <img className={styles.img} src={PhoneImg} alt='phone'/>
    </div>
  )
}

export default ContactUs