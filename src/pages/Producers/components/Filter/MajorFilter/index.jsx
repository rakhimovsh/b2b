import React from 'react'
import styles from './styles.module.css'

const MajorFilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel}  htmlFor="firstCheckbox">Хозяйственные материалы (0)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel}  htmlFor="firstCheckbox">Хозяйственные материалы (0)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel}  htmlFor="firstCheckbox">Хозяйственные материалы (0)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel}  htmlFor="firstCheckbox">Хозяйственные материалы (0)</label>
        </div>
    </>
  )
}

export default MajorFilter