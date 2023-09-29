import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import CompanyCard from "../../../../components/CompanyCard/index";
import { useEffect } from 'react';
import { getAllCompanies } from '@/redux/actions/company';
import { useTranslation } from 'react-i18next';


const Recommended = () =>{
  const {t} = useTranslation()
  const {companies, singleCompany} = useSelector(state => state.company)
  useEffect(()=>{
    
  },[])
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getAllCompanies())}, [])
  const filteredCompanies = companies.items.filter((companyId) => companyId?.id !== singleCompany?.item?.id)
  return (
    <>
      <h2 className={styles.recommendedTitle}>
        {t('companies.recommend')}

      </h2>
      <div className={styles.recommendedList}>
        {filteredCompanies.map(company => {
          return <CompanyCard key={company?.id} company={company}/>
        })}
        
        
      </div>
    </>
  )
}


export default Recommended