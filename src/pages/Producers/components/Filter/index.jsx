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
                <select className={styles.companyMajor} placeholder='Кеп'>
                    <option value="Кепка">Направление компании</option>
                    <option value="Кепка">Кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <div className={styles.companyPlace_box}>
                <select className={styles.companyPlace} placeholder='Кеп'>
                    <option value="Кепка">Расположение  компании</option>
                    <option value="Кепка">Кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <div className={styles.companyRating_box}>
                <select className={styles.companyRating} placeholder='Кеп'>
                    <option value="Кепка">Рейтинг компании</option>
                    <option value="Кепка">Кепка</option>
                    <option value="Кепка">Кепка</option>
                </select>
            </div>
            <button className={styles.filterButton}>Применить фильтр</button>
        </div>
    )
}

export default Filter 