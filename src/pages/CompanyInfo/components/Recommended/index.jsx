import styles from './styles.module.css'
import CompanyCard from "@components/CompanyCard/index.jsx";



const Recommended = () =>{
  return (
    <>
      <h2 className={styles.recommendedTitle}>
        Рекомендуем
      </h2>
      <div className={styles.recommendedList}>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
      </div>
    </>
  )
}


export default Recommended