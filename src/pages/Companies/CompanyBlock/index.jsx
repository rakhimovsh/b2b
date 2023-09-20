import React from 'react'
import styles from './styles.module.css'
import Countries from '../../../components/CountrySelect/data'
import { useTranslation } from 'react-i18next'
import CompProductCarousel from '@components/CompProductCarousel/index.jsx';
import { truncateString } from '@/utils/truncateString.js';


const CompanyBlock = ({company}) => {
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
    const lang = i18n.language  
    const getCountryName = () => {
        return(Countries.find(c => c.code.toLowerCase() === company?.country?.toLowerCase())?.name)
    }

    
    return (
        <div className={styles.companyCard}>
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
                <img width={20} src={`https://flagsapi.com/${company?.country}/flat/64.png`} alt="location" />
                <p>{getCountryName()}</p>
            </div>
            <p className={styles.description}>{truncateString(company?.translations[lang]?.description, 480)}</p>
            <div>
                
                { company?.products.length > 0 
                    ? 
                    <div className={styles.productCarousel}>
                        <p className={styles.productsFor}>All the products for </p>
                        <CompProductCarousel 
                            slides={company?.products.map((product) => {
                                return (
                                    <div key={product?.id} className={styles.sliderItem}>
                                        <img className={styles.itemImage} src={product?.images[0]?.image} alt="product image" />
                                        <p className={styles.itemName}>{truncateString(product?.translations[lang]?.name, 20)}</p>
                                        {console.log(product)}
                                    </div>                                    
                                )
                            
                            })}
                            responsive={responsive}
                        />
                    </div>
                    
                    :
                    <p>No products</p>
                }
                
                
            </div>
        </div>
        
  )
  
}

export default CompanyBlock