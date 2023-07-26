import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <h1 className={styles.title}>{t('home.title')}</h1>;
};

export default Home;
