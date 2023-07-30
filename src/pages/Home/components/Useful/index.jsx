import UsefulCard from '@components/UsefulCard/index.jsx';

import styles from './styles.module.css';

const Useful = () => {
  return (
    <div className='container'>
      <h2 className={styles.usefulTitle}>Полезное</h2>
      <div className={styles.usefulBox}>
        <UsefulCard />
      </div>
      <button className={styles.usefulButton}>Посмотреть все</button>
    </div>
  );
};

export default Useful;
