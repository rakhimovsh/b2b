import HeroForm from '@components/HeroForm/index.jsx';
import styles from './styles.module.css';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchBtn = () => {
    if (search) {
      navigate({
        pathname: '/product',
        search: `?${createSearchParams({ search: search })}`,
      });
    }
  };
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
                onChange={(evt) => setSearch(evt.target.value)}
              />
              <button onClick={handleSearchBtn} className={styles.heroSearch_button}>
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
};

export default Hero;
