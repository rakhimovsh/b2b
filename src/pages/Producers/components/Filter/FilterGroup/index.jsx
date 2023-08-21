import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import {ReactComponent as IconRight} from '@assets/svg/chevron-down.svg'
import {ReactComponent as IconLeft} from '@assets/svg/arrowIcon-left.svg'
import MajorFilter from '../MajorFilter'
import Placefilter from '../PlaceFilter'
import { truncateString } from '@/utils/truncateString'
import { useTranslation } from 'react-i18next'
import { getAllCompanies } from '../../../../../redux/actions/company'
import { useDispatch } from 'react-redux'

const FilterGroup = ({major, openMajor, setOpenMajor, setMajor, search}) => {
  const {i18n} = useTranslation()
  const lang = i18n.language  
  const dispatch = useDispatch()
  // const [openMajor, setOpenMajor] = useState(false)
  const [filterType, setFilterType] = useState('major')
  // const [major, setMajor] = useState('Не указан')
  // const [search, setSearch] = useState('')
  useEffect(() => {dispatch(getAllCompanies(search, major?.id))}, [search, major?.id])

  return (
    <div>
      {!openMajor && 
        <div className={styles.filter}>
          {/* <div className={styles.filterCheckbox}>
              <div className={styles.filterName}><h3 className={styles.filterH3}>Рейтинг компании</h3><IconRight className={styles.iconRight} /></div>
              <p className={styles.filterItem}>Не указан</p>
          </div> */}
          <div>
              <div onClick={() => {setOpenMajor(true); setFilterType('major')}} className={styles.filterName}>
                <h3 className={styles.filterH3}>Направление компании</h3>
                <IconRight className={styles.iconRight} />
              </div>
              <p className={styles.filterItem}>{typeof major === "string" ? major : truncateString(major.translations[lang].name) }</p>
          </div>
          <div>
              <div onClick={() => {setOpenMajor(true); setFilterType('place')}} className={styles.filterName}>
                <h3 className={styles.filterH3}>Расположение  компании</h3>
                <IconRight className={styles.iconRight} />
              </div>
              <p className={styles.filterItem}>Не указан</p>
          </div>
        </div>
      }
      {openMajor && 
        <div className={styles.filterTool}>
          {filterType === 'major' && 
            <div >
              <div onClick={() => {setOpenMajor(false)}} className={styles.filterName}><IconLeft style={{width: '24px', height: '24px'}}/> <h3>Направление компании</h3></div> 
              <div className={styles.filterContent}><MajorFilter setMajor={setMajor} major={major} setOpenMajor={setOpenMajor}/></div>
            </div>
          }
          {filterType === 'place' && 
            <div>
              <div onClick={() => {setOpenMajor(false)}} className={styles.filterName}><IconLeft style={{width: '24px', height: '24px'}}/> <h3>Расположение компании</h3></div> 
              <div className={styles.filterContent}><Placefilter /></div>
            </div>
          }
          
        </div>
      }
      
    </div>
  )
}

export default FilterGroup