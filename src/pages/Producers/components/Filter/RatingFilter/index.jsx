import React from 'react'
import styles from './styles.module.css'

const RatingFilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='thirdCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="thirdCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='thirdCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="thirdCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='thirdCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="thirdCheckbox">5.0 (12)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='thirdCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="thirdCheckbox">5.0 (12)</label>
        </div>
    </>
  )
}

export default RatingFilter