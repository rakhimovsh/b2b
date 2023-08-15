import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import {ReactComponent as ArrowDown}  from '@assets/svg/arrowDown.svg'
import {ReactComponent as CloseIcon}  from '@assets/svg/redClose.svg'
import Checkbox from './Checkbox'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../../../redux/actions/category'

const CategoryFilter = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const {categories} = useSelector(state => state.category)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getAllCategories())}, [])
  const [openSelect, setOpenSelect] = useState(null)
  const [openSecond, setOpenSecond] = useState(false)

  
  return (
    <div className={styles.categoryFilter_box}>
        <h3 className={styles.categoryTitle}>
          Категории
        </h3>
        <div  className={styles.categoryBox}>
          {categories?.items.map((category) => {
            console.log(category?.subcategories);
            return (
              <div key={category?.id} className={styles.filterName}>
                <div className={styles.selectBox} onClick={() => {setOpenSelect(prev => category?.id === prev ? null : category?.id)}}>
                  <h4>{category?.translations[lang]?.name}</h4><ArrowDown />
                </div>
                {openSelect === category?.id && 
                  <div className={styles.checkboxes} id='checkboxes'>
                    <Checkbox subcategories={category?.subcategories} />
                  </div>
                }
              </div>
            )
          })}
          {(openSelect || openSecond) && 
            <div className={styles.closeButton} onClick={() => {setOpenSecond(false), setOpenSelect(false)}}>
              <CloseIcon /> <p className={styles.clearFilter}>очистить фильтр</p>
            </div>
          }
        </div>
    </div>
      
    
  )
}

export default CategoryFilter