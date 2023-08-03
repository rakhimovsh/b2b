import React from 'react'
import styles from './style.module.css'
import ArrowRight from '../../../../assets/svg/arrowIcon-right.svg'

const CompanyPages = () => {
  return (
    <div className={styles.pagesButtons}>
        <button className={styles.pagesBtn1}>1</button>
        <button className={styles.pagesBtn2}>2</button>
        <button className={styles.pagesbtn_next}>следующий <img src={ArrowRight} alt="" /></button>
    </div>
  )
}

export default CompanyPages