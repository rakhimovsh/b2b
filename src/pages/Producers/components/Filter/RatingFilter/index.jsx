import React from 'react'
import styles from './styles.module.css'

const RatingFilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">5.0 (12)</label>
        </div>
    </>
  )
}

export default RatingFilter