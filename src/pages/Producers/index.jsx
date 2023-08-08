import styles from './styles.module.css'
import CompanyCard from "@components/CompanyCard"
import CompanyPages from "./components/CompanyPages"
import Filter from "./components/Filter"

const Producers = () => {
    return (
        <div className={"container " + styles.producers}>
            <Filter />
            <div className={styles.companyContainer}>
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>           
            <CompanyPages />
        </div>
    )
}

export default Producers