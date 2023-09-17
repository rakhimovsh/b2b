import React, { useState } from 'react'
import styles from './style.module.css'
import Checkbox from './Checkbox'
import {ReactComponent as CloseIcon}  from '@assets/svg/redClose.svg'


const SortFilter = () => {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className={styles.sortBox}>
        <h3 onClick={() => {setShowFilter(!showFilter)}} className={styles.sortTitle}>Сортировка</h3>
       
        <div className={!showFilter ? styles.checkboxes : styles.showFilter}>
          <Checkbox />
        </div>
        <div className={styles.closeButton} onClick={() => {setOpenSecond(false), setOpenSelect(false)}}>
              <CloseIcon /> <p className={styles.clearFilter}>очистить фильтр</p>
        </div>
    </div>
  )
}

export default SortFilter