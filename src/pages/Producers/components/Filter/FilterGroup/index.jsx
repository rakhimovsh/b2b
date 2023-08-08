import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as IconRight} from '@assets/svg/chevron-down.svg'

const FilterGroup = () => {
  return (
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
  )
}

export default FilterGroup