import styles from './styles.module.css';
import B2bBlock from '@components/B2bBlock';


const B2bSolution = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.b2bSolution_box}>
        <div className={styles.b2bSolution_title}>
          <h2 className={styles.b2bSolution_titleH2}>B2B решение для вашего бизнеса</h2>
        </div>
        <B2bBlock />
      </div>
    </div>
  );
};

export default B2bSolution;
