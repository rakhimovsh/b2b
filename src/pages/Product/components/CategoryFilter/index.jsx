import React, { useState } from 'react'
import styles from './style.module.css'
import {ReactComponent as ArrowDown}  from '@assets/svg/arrowDown.svg'
import {ReactComponent as CloseIcon}  from '@assets/svg/redClose.svg'
import Checkbox from './Checkbox'

const CategoryFilter = () => {
  const [openSelect, setOpenSelect] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  return (
    <div className={styles.categoryFilter_box}>
        <h3 className={styles.categoryTitle}>
        Категории
        </h3>
        <div className={styles.categoryBox}>
          <div className={styles.filterName}>
            <div className={styles.selectBox} onClick={() => {setOpenSelect(!openSelect)}}>
              <h4>Ткани, нить & аксессуары</h4><ArrowDown />
            </div>
            {openSelect && 
              <div className={styles.checkboxes} id='checkboxes'>
                <Checkbox />
              </div>
            }
          </div>
          <div className={styles.filterName}>
            <div className={styles.selectBox} onClick={() => {setOpenSecond(!openSecond)}}>
              <h4>Трикотажные изделия</h4><ArrowDown />
            </div>
            {openSecond && 
              <div className={styles.checkboxes} id='checkboxes'>
                <Checkbox />
              </div>
            }
          </div>
          {(openSelect || openSecond) && 
            <div className={styles.closeButton} onClick={() => {setOpenSecond(false), setOpenSelect(false)}}>
              <CloseIcon /> <p className={styles.clearFilter}>очистить фильтр</p>
            </div>
          }
        </div>
    </div>
      
    
  )
}

export default CategoryFilter