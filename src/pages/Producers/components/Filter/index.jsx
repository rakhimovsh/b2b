import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@assets/svg/searchIcon.svg'
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'
import Placefilter from './PlaceFilter'
import MajorFilter from './MajorFilter'
import FilterGroup from './FilterGroup'
import { useTranslation } from 'react-i18next'
import { truncateString } from '@/utils/truncateString'
import { useDispatch } from 'react-redux'
import { getAllCompanies } from '@/redux/actions/company.js'

const Filter = () => {
    const dispatch = useDispatch()
    const {i18n} = useTranslation()
    const lang = i18n.language  
    const {t} = useTranslation()
    const [openMajor, setOpenMajor] = useState(false)
    const [openPlace, setOpenPlace] = useState(false)
    const [openFiltergroup, setOpenFiltergroup] = useState(false)
    const [major, setMajor] = useState(`${t('companies.businessCategory')}`)
    const [place, setPlace] = useState(`${t('companies.companyLocation')}`)
    const [search, setSearch] = useState('')
    useEffect(() => {
      dispatch(getAllCompanies(search, major?.id, place?.code))
    }, [search, major, place])
    
    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterGroup_container}>
                <div onClick={() => {setOpenFiltergroup(!openFiltergroup)}} className={styles.filterGroup}>
                    <p className={styles.filterName}>Фильтр</p><IconDown />
                </div>
                {openFiltergroup && 
                    <div className={styles.filterGroup_box}>
                        <FilterGroup openMajor={openMajor} setOpenMajor={setOpenMajor} major={major} setMajor={setMajor} setSearch={setSearch} search={search} />
                    </div> 
                } 
            </div>
            <div className={styles.searchInput_box}>
                <input className={styles.searchInput} placeholder={t('companies.search')} onChange={(e) => setSearch(e.target.value)} />
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
                    <p className={styles.filterName}>{typeof place === "string" ? place : place.name}</p><IconDown />
                </div>
                { openPlace && 
                    <div className={styles.placeCheckboxes}>
                        <Placefilter setPlace={setPlace} place={place}/>
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
            <button className={styles.filterButton}>{t('companies.applyFilter')}</button>
        </div>
    )
}

export default Filter 