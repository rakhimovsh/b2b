import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '@/redux/actions/category.js'
import { useTranslation } from 'react-i18next'

const MajorFilter = ({setMajor, setOpenMajor, major}) => {
    const {i18n} = useTranslation()
    const lang = i18n.language   
    const {categories} = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getAllCategories())}, [])
  return (
    <>
        {categories.items.map((category) => {
            return (
                <div  key={category.id} className={styles.checkbox}>
                    <input onChange={() => {setMajor(category); setOpenMajor(false)}} checked={major?.id === category?.id} style={{width: '13px', height: '16px'}} type="radio" name='firstCheckbox' id={category?.id} />
                    <label className={styles.checkboxLabel}  htmlFor={category?.id}>{category?.translations[lang]?.name} ({category?.subcategories?.length})</label>
                </div>
            )
        })}
    </>
  )
}

export default MajorFilter