import styles from './styles.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '@/redux/actions/news.js';
import { useTranslation } from 'react-i18next';


const UsefulCard = () => {
  const {i18n} = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsInfo) 
  useEffect(() => {dispatch(getNews())}, [])
 
  return (
    <>
      {news?.items.map((newsCard) => {
        return (
          <div key={newsCard?.id} className={styles.usefulCard}>
            <img className={styles.usefulImage} src={newsCard?.image} alt='news image' />
            <p className={styles.usefulDate}>{newsCard?.created_at}</p>
            <p className={styles.usefulCard_name}>
              {newsCard?.translations[lang]?.content}
            </p>
            <p className={styles.usefulCard_text}>
              {newsCard?.translations[lang]?.description}
            </p>
            {/* <p className={styles.usefulCard_more}>Подробно</p> */}
          </div>
        );
      })}
    </>
  );
};

export default UsefulCard;
