import React from 'react'
import styles from './styles.module.css'

const Placefilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="secondCheckbox">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="secondCheckbox">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="secondCheckbox">Соединенные Штаты Америки (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' />
            <label className={styles.checkboxLabel} htmlFor="secondCheckbox">Узбекистан (13)</label>
        </div>
    </>
  )
}

export default Placefilter