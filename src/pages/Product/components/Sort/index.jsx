import React from 'react'
import styles from './style.module.css'
import Checkbox from './Checkbox'
import {ReactComponent as CloseIcon}  from '@assets/svg/redClose.svg'

const Sort = () => {
  
  return (
    <div className={styles.sortBox}>
        <h3 className={styles.sortTitle}>Сортировка</h3>
        <div className={styles.checkboxes}>
          <Checkbox />
        </div>
        <div className={styles.closeButton} onClick={() => {setOpenSecond(false), setOpenSelect(false)}}>
              <CloseIcon /> <p className={styles.clearFilter}>очистить фильтр</p>
        </div>
    </div>
  )
}

export default Sort