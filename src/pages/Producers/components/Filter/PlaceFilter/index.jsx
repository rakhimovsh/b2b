import React from 'react'
import Countries from "@/data/countries.js"
import styles from './styles.module.css'

const Placefilter = ({setPlace, place}) => {
  return (
    <div className={styles.wrapper}>
      {
        Countries.map(c => (
          <div key={c.code} className={styles.checkbox}>
            <input checked={place?.code === c.code} onChange={() => setPlace(c)} style={{width: '13px', height: '16px'}} type="radio" name='secondCheckbox' id={c.code} />
            <label className={styles.checkboxLabel} htmlFor="5">{c.name}</label>
          </div>
        ))
      }
    </div>
  )
}

export default Placefilter