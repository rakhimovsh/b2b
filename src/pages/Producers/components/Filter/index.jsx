import { useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@assets/svg/searchIcon.svg'
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'
import Placefilter from './PlaceFilter'
import MajorFilter from './MajorFilter'
import RatingFilter from './RatingFilter'

const Filter = () => {
    const [openMajor, setOpenMajor] = useState(false)
    const [openPlace, setOpenPlace] = useState(false)
    const [openRating, setOpenRating] = useState(false)

    return (
        <div className={styles.filterContainer}>
            <div className={styles.searchInput_box}>
                <input className={styles.searchInput} placeholder='Поиск по имени' />
                <img className={styles.searchIcon} src={SearchIcon} alt="" />
            </div>
            <div className={styles.checkbox_box}>
                <div onClick={() => {setOpenMajor(!openMajor)}} className={styles.companyMajor_box}>
                    <p className={styles.filterName}>Направление компании</p><IconDown />
                </div>
                {openMajor && 
                <div className={styles.checkboxes}>
                    <MajorFilter />
                </div>}
                
            </div>
            <div className={styles.companyPlace_box}>
                <div  onClick={() => {setOpenPlace(!openPlace)}} className={styles.placeFilter}>
                    <p className={styles.filterName}>Расположение  компании</p><IconDown />
                </div>
                { openPlace && 
                    <div className={styles.placeCheckboxes}>
                        <Placefilter />
                    </div>
                }
                    
            </div>
            <div className={styles.companyRating_box}>
                <div onClick={() => {setOpenRating(!openRating)}} className={styles.ratingFilter}>
                    <p  className={styles.filterName}>Рейтинг компании</p><IconDown />
                </div>
                {openRating && 
                    <div className={styles.ratingCheckboxes}>
                        <RatingFilter />  
                    </div>
                }
                
            </div>
            <button className={styles.filterButton}>Применить фильтр</button>
        </div>
    )
}

export default Filter 