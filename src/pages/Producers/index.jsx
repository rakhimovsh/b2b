import styles from './styles.module.css'
import CompanyCard from "@components/CompanyCard"
import CompanyPages from "./components/CompanyPages"
import Filter from "./components/Filter"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCompanies } from '../../redux/actions/company'



const Producers = () => {
    const dispatch = useDispatch()
    const {companies} = useSelector(state => state.company)
    useEffect(() => {dispatch(getAllCompanies())}, [])

    return (
        <div className={"container " + styles.producers}>
            <Filter />
            <div className={styles.companyContainer}>
                {companies.items?.map(company => (
                    <CompanyCard key={company?.id} company={company}/>   
                ))}    
            </div>           
            <CompanyPages />
        </div>
    )
}

export default Producers