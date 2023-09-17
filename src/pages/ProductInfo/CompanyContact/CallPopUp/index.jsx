import React from 'react'
import styles from './styles.module.css'
import CallImage from '@assets/images/callImage.png'
import {ReactComponent as CloseIcon} from '@assets/svg/closeIcon.svg'

const CallPopUp = ({closePhoneModal}) => {
  return (
    <div className={styles.popUpBox}>
        <div className={styles.popUpContainer}>
        <div>
            <h3 className={styles.callTitle}>Связаться с продавцом</h3>
            <div className={styles.phoneNumber_box}>
                <p className={styles.phoneText}>Номер телефона:</p>
                <p className={styles.phoneNumber}>+998 71 968 99 88</p>
            </div>
            <div className={styles.phoneNumber_box}>
                <p className={styles.phoneText}>Номер телефона:</p>
                <p className={styles.phoneNumber}>+998 71 968 99 88</p>
            </div>
        </div>
        <div>
            <img src={CallImage} className={styles.popUpImage} alt="phone image" />
        </div>
        <CloseIcon onClick={() => closePhoneModal(false)} className={styles.closeIcon} />
    </div>
    </div>
    
  )
}

export default CallPopUp