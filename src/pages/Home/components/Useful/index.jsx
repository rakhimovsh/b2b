import {useNavigate} from "react-router-dom";

import UsefulCard from '@components/UsefulCard/index.jsx';
import styles from './styles.module.css';

const Useful = () => {
  const navigate = useNavigate()
  return (
    <div className={'container ' + styles.usefulContainer}>
      <h2 className={styles.usefulTitle}>Полезное</h2>
      <div className={styles.usefulBox}>
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
      </div>
      <button onClick={() => navigate('/news')} className={styles.usefulButton}>Посмотреть все</button>
    </div>
  );
};

export default Useful;
