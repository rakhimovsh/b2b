import React from 'react'
import styles from './styles.module.css'

const Placefilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">Соединенные Штаты Америки (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '16px', height: '16px'}} type="radio" name='firstCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="firstCheckbox">Узбекистан (13)</label>
        </div>
    </>
  )
}

export default Placefilter