import React from 'react'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'

const Checkbox = ({subcategories}) => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  
  return (
    <>
        {subcategories.map((subcategory) => {
          return (
            <div className={styles.checkboxLabel}>
              <div className={styles.checkboxItem}>
                <input type="checkbox" name='productOne'/>
                <label htmlFor="productOne">{subcategory?.translations[lang]?.name}</label> 
              </div>
              <p className={styles.productNumber}>{subcategory?.length}</p>
            </div>
          )
        })}
        
        
    </>
  )
}

export default Checkbox