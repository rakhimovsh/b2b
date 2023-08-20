import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import CompanyCard from "../../../../components/CompanyCard/index";
import { useEffect } from 'react';
import { getAllCompanies } from '@/redux/actions/company';


const Recommended = () =>{
  const {companies, singleCompany} = useSelector(state => state.company)
  useEffect(()=>{
    
  },[])
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getAllCompanies())}, [])
  const filteredCompanies = companies.items.filter((companyId) => companyId?.id !== singleCompany?.item?.id)
  return (
    <>
      <h2 className={styles.recommendedTitle}>
        Рекомендуем

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