import React from 'react'
import styles from './style.module.css'
import ArrowRight from '@assets/svg/arrowIcon-right.svg'
import { useTranslation } from 'react-i18next'

const CompanyPages = ({page, setPage, allPages}) => {
  const {t} = useTranslation()
  const arrPages = new Array(allPages).fill(<></>)
  const hanldeClick = () => {
    setPage(prev => {
      if(prev < allPages) return ++prev
    })
  }
  return (
    <div className={styles.pagesButtons}>
        {
          arrPages?.map((el, index) =>(
            <button key={index} onClick={() => setPage(index + 1)} className={index + 1 === page ? styles.pagesBtn1 : styles.pagesBtn2}>{index + 1}</button>
          ))
        }
        <button disabled={page >= allPages} onClick={hanldeClick} className={styles.pagesbtn_next}>{t('companies.nextButton')} <img src={ArrowRight} alt="" /></button>
    </div>
  )
}

export default CompanyPages