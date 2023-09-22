import React, { useEffect , useState } from 'react'
import styles from './styles.module.css'
import Countries from './Countries'
import SortFilter from './SortFilter'
import ProductCategories from './ProductCategories'
import CompanyBlock from './CompanyBlock'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanies } from '@/redux/actions/company.js'
import { useSearchParams } from 'react-router-dom'
import { getProducts } from '@/redux/actions/product'
import { use } from 'i18next'
const Companies = () => {
    const dispatch = useDispatch() 
    const [searchParams , setSearch] = useSearchParams();
    const [country , setCountry] = useState();



    const lang = searchParams.get('lng');
    const search = searchParams.get('search');
    const { companies } = useSelector((state) => state.company);
    const { products } = useSelector((state) => state.product);
    const [checkedSubcategories, setCheckedSubcategories] = useState([]);
    
    useEffect(() => {
        dispatch(getProducts(search));
    },[])


    useEffect(() => {
        if(products.items.length > 0){
            const subcategoryIds = products.items?.map(product => product?.category?.id);
            setCheckedSubcategories(subcategoryIds);
        }
    },[products])

    useEffect(() => {
        if(products.items.length > 0) {
            dispatch(getAllCompanies('' , '' , country , checkedSubcategories))
        }
    },[country , checkedSubcategories , search])
    

    return (
        <div className={'container ' + styles.companiesContainer}>
            <div className={styles.filterbox}>
                <Countries setCountry={setCountry} />
                <ProductCategories checkedSubcategories={checkedSubcategories} setCheckedSubcategories={setCheckedSubcategories}/>
                {/* <SortFilter />         */}
            </div>
            <div  className={styles.companyBox}>
                {companies.items.map((company) => {
                    return (
                        <div key={company?.id}>
                            <CompanyBlock search={search} key={company?.id} company={company}  />
                        </div>  
                        
                    )                    
                })} 
            </div>       
        </div>
  )
}

export default Companies