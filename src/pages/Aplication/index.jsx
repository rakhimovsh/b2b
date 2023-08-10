import React from 'react'
import styles from './styles.module.css'
import AppImage from '@assets/images/applicationImage.png'
import TickIcon from '@assets/svg/tickIcon.svg'
import TickIconBg from '@assets/svg/tickIconBg.svg'
import HeroForm from "@components/HeroForm/index.jsx";

const Application = () => {
  return (
    <div className={'container ' + styles.application}>
        <HeroForm/>
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