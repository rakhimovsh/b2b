import React, { useEffect , useState } from 'react'
import styles from './styles.module.css'
import Countries from './Countries'
import SortFilter from './SortFilter'
import ProductCategories from './ProductCategories'
import CompanyBlock from './CompanyBlock'
import { getProducts } from '@/redux/actions/product.js';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanies } from '../../redux/actions/company'
import { useSearchParams } from 'react-router-dom'

const Companies = () => {
    const dispatch = useDispatch() 
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [searchParams , setSearch] = useSearchParams();
    const [country , setCountry] = useState();

    // const { products } = useSelector((state) => state.product);
    const { companies } = useSelector((state) => state.company);
    const [checkedSubcategories, setCheckedSubcategories] = useState([]);

    useEffect(() => {
        dispatch(getAllCompanies())

        if(country !== ''){
            dispatch(getAllCompanies('','',country))
        }

        if(checkedSubcategories.length > 0){
            dispatch(getAllCompanies('','', country, checkedSubcategories))
        }
        
    },[country , checkedSubcategories])
    



    return (
        <div className={'container ' + styles.companiesContainer}>
            <div className={styles.filterbox}>
                <Countries setCountry={setCountry} />
                <ProductCategories checkedSubcategories={checkedSubcategories} setCheckedSubcategories={setCheckedSubcategories}/>
                {/* <SortFilter />         */}
            </div>
            <div>
            {companies.items.map((company) => {
                return (
                    <div key={company?.id} className={styles.companyBox}>
                        <CompanyBlock key={company?.id} company={company}  />
                    </div>  
                     
                )                    
            })} 
            </div>
            
            
            
        </div>
  )
}

export default Companies