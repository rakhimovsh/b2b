import React from 'react'
import styles from './styles.module.css'
import Countries from '../../../data/countries.js'
import { useTranslation } from 'react-i18next'
import CompProductCarousel from '@components/CompProductCarousel';
import { truncateString } from '@/utils/truncateString.js';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CompanyBlock = ({company }) => {
    const responsive = {
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        840: {
          items: 3,
        },
        900: {
          items: 4,
        },
      };
    const {i18n} = useTranslation()
    const [searchParams , setSearch] = useSearchParams();
    const search = searchParams.get('search');
    const lang = i18n.language  
    const {t} = useTranslation()
    const navigate = useNavigate()
    const getCountryName = () => {
        return(Countries.find(c => c.code.toLowerCase() === company?.country?.toLowerCase())?.name)
    }

  
    const filtered = company.products.filter(product => product?.translations[lang]?.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div onClick={() => {navigate(`/company/info/${company?.id}`)}} className={styles.companyCard}>
            <div className={styles.companyHead}>
                <img 
                    src={company?.image} 
                    alt="company logo" 
                    width={100}
                    height={77}
                    style={{ marginRight: '10px'}}
                />
                <h3>{company?.name}</h3>
            </div>
            <div className={styles.country}>
                <img width={20} style={{marginRight: '8px'}} src={`https://flagsapi.com/${company?.country}/flat/64.png`} alt="location" />
                <p>{getCountryName()}</p>
            </div>
            <p className={styles.description}>{(company?.translations[lang]?.short_description)}</p>
            
            <div>
                
                { company?.products.length > 0 
                    ? 
                    <div className={styles.productCarousel}>
                        <p className={styles.productsFor}>{t('companies.searchCompanies.searchResult')} "{search}"</p>
                        <CompProductCarousel 
                            slides={filtered.map((product) => {
                                return (
                                    <div key={product?.id} className={styles.sliderItem}>
                                        <img className={styles.itemImage} src={product?.images[0]?.image} alt="product image" />
                                        <p className={styles.itemName}>{truncateString(product?.translations[lang]?.name, 20)}</p>
                                       
                                    </div>                                    
                                )
                            
                            })}
                            responsive={responsive}
                        />
                    </div>
                    
                    :
                    <p>{t('companies.searchCompanies.noProducts')}</p>
                }
                
                
            </div>
        </div>
        
  )
  
}

export default CompanyBlock