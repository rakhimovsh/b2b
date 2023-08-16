import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as IconRight} from '@assets/svg/chevron-down.svg'
import {ReactComponent as IconLeft} from '@assets/svg/arrowIcon-left.svg'
import MajorFilter from '../MajorFilter'

const FilterGroup = () => {
  return (
    <div>
      <div className={styles.filter}>
          <div className={styles.filterCheckbox}>
              <div className={styles.filterName}><h3 className={styles.filterH3}>Рейтинг компании</h3><IconRight className={styles.iconRight} /></div>
              <p className={styles.filterItem}>Не указан</p>
          </div>
          <div>
              <div className={styles.filterName}><h3 className={styles.filterH3}>Направление компании</h3><IconRight className={styles.iconRight} /></div>
              <p className={styles.filterItem}>Не указан</p>
          </div>
          <div>
              <div className={styles.filterName}><h3 className={styles.filterH3}>Расположение  компании</h3><IconRight className={styles.iconRight} /></div>
              <p className={styles.filterItem}>Не указан</p>
          </div>
      </div>
      <div className={styles.filterTool}>
        <div className={styles.filterName}><IconLeft style={{width: '24px', height: '24px'}}/> <h3>Направление компании</h3></div> 
        <MajorFilter />
      </div>
    </div>
  )
}

export default FilterGroup