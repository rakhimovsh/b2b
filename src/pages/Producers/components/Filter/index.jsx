import styles from './styles.module.css'
import SearchIcon from '../../../../assets/svg/searchIcon.svg'

const Filter = () => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.searchInput_box}>
                <input className={styles.searchInput} placeholder='Поиск по имени' />
                <img className={styles.searchIcon} src={SearchIcon} alt="" />
            </div>
            <div className={styles.companyMajor_box}>
                <select className={styles.companyMajor}>
                    <option value="major" hidden>Направление компании</option>
                    <option value="Кепка" >кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <div className={styles.companyPlace_box}>
                <select className={styles.companyPlace} placeholder='Кеп'>
                    <option value="palce" hidden>Расположение  компании</option>
                    <option value="Кепка">Кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <div className={styles.companyRating_box}>
                <select className={styles.companyRating} placeholder='Кеп'>
                    <option value="rating" hidden>Рейтинг компании</option>
                    <option value="Кепка">Кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <button className={styles.filterButton}>Применить фильтр</button>
        </div>
    )
}

export default Filter 