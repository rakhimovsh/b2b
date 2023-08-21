import styles from './styles.module.css'
import CompanyCard from "@components/CompanyCard"
import CompanyPages from "./components/CompanyPages"
import Filter from "./components/Filter"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllCompanies } from '@/redux/actions/company'
import { usePagination } from '@/hooks/usePagination'



const Producers = () => {
    const dispatch = useDispatch()
    const {companies} = useSelector(state => state.company)
    const [page, setPage] = useState(1)
    const [sortedCompanies, allPages] = usePagination(companies.items, page, 9)
    useEffect(() => {dispatch(getAllCompanies())}, [])

    return (
        <div className={"container " + styles.producers}>
            <Filter />
            <div className={styles.companyContainer}>
                {sortedCompanies?.map(company => (
                    <CompanyCard key={company?.id} company={company}/>   
                ))}    
            </div>           
            <CompanyPages  allPages={allPages} page={page} setPage={setPage}/>
        </div>
    )
}

export default Producers