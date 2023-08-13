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
  console.log(companies.items);
  console.log(singleCompany);
  const filteredCompanies = companies.items.filter((companyId) => companyId?.id !== singleCompany?.item?.id)
  console.log(filteredCompanies);
  return (
    <>
      <h2 className={styles.recommendedTitle}>
        Рекомендуем

      </h2>
      <div className={styles.recommendedList}>
        {filteredCompanies.map(company => {
          return <CompanyCard company={company}/>
        })}
        
        
      </div>
    </>
  )
}


export default Recommended