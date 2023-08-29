import React from 'react'
import styles from './styles.module.css'
import BoxImage from '@assets/images/box-image.png'
import RequestForm from '@components/RequestForm'
import {ReactComponent as CloseIcon} from '@assets/svg/closeIcon.svg'

const RequestPopUp = ({closeMailModal}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.requestContainer}>
        <div className={styles.requestBg}>
          <h3 className={styles.requestTitle}>Заполните форму запроса продукта</h3>
          <img className={styles.requestImage} src={BoxImage} alt="box" />
        </div>
        <div className={styles.requestForm}>
          <RequestForm />
        </div>
        <CloseIcon onClick={() => closeMailModal(false )} className={styles.closeIcon} />
      </div>
    </div>
  )
}

export default RequestPopUp