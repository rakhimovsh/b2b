import React from 'react'
import styles from './styles.module.css'

const Placefilter = () => {
  return (
    <>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' id='5' />
            <label className={styles.checkboxLabel} htmlFor="5">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' id='6' />
            <label className={styles.checkboxLabel} htmlFor="6">Узбекистан (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' id='3'/>
            <label className={styles.checkboxLabel} htmlFor="3">Соединенные Штаты Америки (13)</label>
        </div>
        <div className={styles.checkbox}>
            <input style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' id='4'/>
            <label className={styles.checkboxLabel} htmlFor="4">Узбекистан (13)</label>
        </div>
    </>
  )
}

export default Placefilter