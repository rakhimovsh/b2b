import styles from './styles.module.css';
import { ReactComponent as PhoneIcon } from '@assets/svg/u_phone-alt.svg';
import { ReactComponent as LocationIcon } from '@assets/svg/u_location-point.svg';
import { ReactComponent as BoxIcon } from '@assets/svg/box-icon.svg';
import { ReactComponent as VerifiedIcon } from '@assets/svg/verified.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyById } from '@/redux/actions/company';
import { useTranslation } from 'react-i18next';
import countries from '@components/CountrySelect/data.js'



const CompanyInfo = ({ name, category}) => {
  
  return (
    <>
      <h3 className={styles.companyTitle}>{name}</h3>
      <h4 className={styles.companyDesc}>{category}</h4>
      {/* <span className={styles.companyGrade}>
          <StarIcon className={styles.companyStarIcon} /> 3.6 рейтинг
      </span> */}
    </>
  )
};

const Company = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language  
  const {companyId} = useParams()
  const dispatch = useDispatch()
  const {singleCompany} = useSelector(state => state.company)
  useEffect(() => {dispatch(getCompanyById(companyId))}, [companyId])
  return (
    <div className={styles.company}>
      <div className={styles.companyTop}>
        <img
          className={styles.companyImg}
          src={singleCompany?.item?.image}
          alt='company image'
          width={77}
          height={77}
        />
        <div className={styles.companyInfoMobile}>
          <CompanyInfo name={singleCompany?.item?.name} category={singleCompany?.item?.type_product?.translations[lang]?.name}/>
        </div>
      </div>
      <div>
        <div className={styles.companyInfo}>
          <CompanyInfo name={singleCompany?.item?.name} category={singleCompany?.item?.type_product?.translations[lang]?.name}/>
        </div>
        {/* <ul className={styles.socialNetworks}>
          <li>
            <a target='_blank' href={singleCompany?.item?.facebook}>
              <FaceBookIcon />
            </a>
          </li>
          <li>
            <a target='_blank' href={singleCompany?.item?.instagram}>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a target='_blank'>
              <TelegramIcon href={singleCompany?.item?.telegram}/>
            </a>
          </li>
          <li>
            <a target='_blank'>
              <YouTubeIcon href={singleCompany?.item?.youtube}/>
            </a>
          </li>
        </ul> */}
        <ul className={styles.companyDetails}>
          <li>
            
          <img width={25} src={`https://flagsapi.com/${singleCompany?.item?.country}/flat/64.png`} alt='location' />
            {countries.find(c => c.code.toLowerCase() === singleCompany.item?.country.toLowerCase())?.name}
          </li>
          <li>
            <LocationIcon />
            <p>{singleCompany.item?.location}</p>
          </li>
          <li>
            <PhoneIcon /> {singleCompany?.item?.phone_number}
          </li>
          <li>
            <BoxIcon />
            {singleCompany?.item?.products?.length} товаров
          </li>
          <li>
            <VerifiedIcon style={{width: '18px'}}/>
            Verified
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
