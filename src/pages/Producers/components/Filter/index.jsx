import { useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@assets/svg/searchIcon.svg'
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'
import Placefilter from './PlaceFilter'
import MajorFilter from './MajorFilter'
import RatingFilter from './RatingFilter'
import FilterGroup from './FilterGroup'
import { useTranslation } from 'react-i18next'
import { truncateString } from '@/utils/truncateString'

const Filter = () => {
    const {i18n} = useTranslation()
    const lang = i18n.language  
    const [openMajor, setOpenMajor] = useState(false)
    const [openPlace, setOpenPlace] = useState(false)
    const [openRating, setOpenRating] = useState(false)
    const [openFiltergroup, setOpenFiltergroup] = useState(false)
    const [major, setMajor] = useState('Направление компании')
    const [place, setPlace] = useState('Расположение  компании')
    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterGroup_container}>
                <div onClick={() => {setOpenFiltergroup(!openFiltergroup)}} className={styles.filterGroup}>
                    <p className={styles.filterName}>Фильтр</p><IconDown />
                </div>
                {openFiltergroup && 
                    <div className={styles.filterGroup_box}>
                        <FilterGroup />
                    </div> 
                } 
            </div>
            <div className={styles.searchInput_box}>
                <input className={styles.searchInput} placeholder='Поиск по имени' />
                <img className={styles.searchIcon} src={SearchIcon} alt="" />
            </div>
            <div className={styles.checkbox_box}>
                <div onClick={() => {setOpenMajor(!openMajor)}} className={styles.companyMajor_box}>
                    <p className={styles.filterName}>{typeof major === "string" ? major : truncateString(major.translations[lang].name) }</p><IconDown />
                </div>
                {openMajor && 
                <div  className={styles.checkboxes}>
                    <MajorFilter setMajor={setMajor} setOpenMajor={setOpenMajor} major={major}/>
                </div>}
                
            </div>
            <div className={styles.companyPlace_box}>
                <div  onClick={() => {setOpenPlace(!openPlace)}} className={styles.placeFilter}>
                    <p className={styles.filterName}>Расположение  компании</p><IconDown />
                </div>
                { openPlace && 
                    <div className={styles.placeCheckboxes}>
                        <Placefilter setPlace={setPlace}/>
                    </div>
                }     
            </div>
            {/* <div className={styles.companyRating_box}>
                <div onClick={() => {setOpenRating(!openRating)}} className={styles.ratingFilter}>
                    <p  className={styles.filterName}>Рейтинг компании</p><IconDown />
                </div>
                {openRating && 
                    <div  className={styles.ratingCheckboxes}>
                        <RatingFilter />  
                    </div>
                }
                
            </div> */}
            <button className={styles.filterButton}>Применить фильтр</button>
        </div>
    )
}

export default Filter 