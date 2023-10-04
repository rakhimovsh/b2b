import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import NotFoundImg from '@assets/images/not-found.png'


const NotFound = () =>{
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.notFoundContainer}>
      <div>
        <h1>
          404 error
        </h1>
        <p>
          {t('companies.noCompany')}
        </p>
      </div>
      <div>
        <img className={styles.notFoundImg} src={NotFoundImg} alt='not found image'/>
      </div>
    </div>
  )
}

export default NotFound