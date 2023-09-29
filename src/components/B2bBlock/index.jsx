import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as IconSearch} from "@assets/svg/play-list-search.svg";
import {ReactComponent as IconProducer} from '@assets/svg/u_react.svg'
import {ReactComponent as IconContract} from "@assets/svg/ri_shake-hands-line.svg";
import { useTranslation } from 'react-i18next';

const B2bSolutionContent = ({ Icon, title, text }) => {
  return (
    <div className={styles.b2bSolution_card}>
      <Icon className={styles.solutionCard_icon} />
      <p className={styles.solutionCard_title}>{title}</p>
      <p className={styles.solutionCard_text}>{text}</p>
    </div>
  );
};

const B2bBlock = () => {
  const {t} = useTranslation()
  return (
        <div data-aos="fade-right" className={styles.b2bSolution_content}>
          <B2bSolutionContent
            Icon={IconSearch}
            title={t('home.b2bSolution.item1.name')}
            text={t('home.b2bSolution.item1.text')}
          />
          <B2bSolutionContent
            Icon={IconProducer}
            title={t('home.b2bSolution.item2.name')}
            text={t('home.b2bSolution.item2.text')}
          />
          <B2bSolutionContent
            Icon={IconContract}
            title={t('home.b2bSolution.item3.name')}
            text={t('home.b2bSolution.item3.text')}
          />
        </div>
  )
}

export default B2bBlock