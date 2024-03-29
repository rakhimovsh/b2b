import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroForm from '@components/HeroForm/index.jsx';
import styles from './styles.module.css';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';


const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { t } = useTranslation()
  const lang = i18n.language;

  // console.log('current lang' , lang);

  const handleSearchBtn = () => {
    if (search) {
      navigate(`/companies?lng=${lang}&search=${search}`)
    } 
  };
  return (
    <div className={styles.heroBg}>
      <div className={'container ' + styles.heroContainer}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>{t('home.hero.title')}</h1>
          <p className={styles.heroText}>
            {t('home.hero.text')}
          </p>
          <div className={styles.heroProductCategory}>
            <div className={styles.heroSearch}>
              <input
                placeholder={t('home.hero.search')}
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
