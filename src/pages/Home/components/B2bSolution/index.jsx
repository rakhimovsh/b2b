import styles from './styles.module.css';

import {ReactComponent as IconSearch} from "@assets/svg/play-list-search.svg";
import {ReactComponent as IconProducer} from '@assets/svg/u_react.svg'
import {ReactComponent as IconContract} from "@assets/svg/ri_shake-hands-line.svg";


const B2bSolutionContent = ({ Icon, title, text }) => {
  return (
    <div className={styles.b2bSolution_card}>
      <Icon className={styles.solutionCard_icon} />
      <p className={styles.solutionCard_title}>{title}</p>
      <p className={styles.solutionCard_text}>{text}</p>
    </div>
  );
};
const B2bSolution = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.b2bSolution_box}>
        <div className={styles.b2bSolution_title}>
          <h2 className={styles.b2bSolution_titleH2}>B2B решение для вашего бизнеса</h2>
        </div>
        <div className={styles.btbSolution_content}>
          <B2bSolutionContent
            Icon={IconSearch}
            title='Поиск'
            text='Сделайте поиск и найдите продукт'
          />
          <B2bSolutionContent
            Icon={IconProducer}
            title='Производитель'
            text='Связаться с производителями для обсуждения цен'
          />
          <B2bSolutionContent
            Icon={IconContract}
            title='Договор'
            text='Заключите договор с производителем'
          />
        </div>
      </div>
    </div>
  );
};

export default B2bSolution;
