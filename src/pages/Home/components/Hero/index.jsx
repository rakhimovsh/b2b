import HeroForm from "@components/HeroForm/index.jsx";
import styles from './styles.module.css'
import {ReactComponent as SearchSvg} from '@assets/svg/search.svg'

const Hero = () => {
  return (
    <div className={styles.heroBg}>
      <div className={'container ' + styles.heroContainer}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>Оптовый рынок для каждого случая</h1>
          <p className={styles.heroText}>
            Мы поможем вам найти товары произведенные в Узбекистане напрямую от производителей
          </p>
          <div className={styles.heroProductCategory}>
            <div className={styles.heroSearch}>
              <input
                placeholder='Название продукта'
                className={styles.heroCategory_search}
                type='text'
              />
              <button className={styles.heroSearch_button}>
                <SearchSvg />
              </button>
            </div>
          </div>
        </div>
        <div>
          <HeroForm />
        </div>
        
      </div>
    </div>
  );
}

export default Hero