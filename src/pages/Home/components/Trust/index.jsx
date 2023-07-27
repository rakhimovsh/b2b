import styles from './styles.module.css';

import B2bDiscountSVG from '@assets/svg/b2bDiscountSVG.svg';
import EuroPagesSVG from '@assets/svg/europagesSVG.svg';
import EvernoteSVG from '@assets/svg/evernoteSVG.svg';
import AlibabaSVG from '@assets/svg/alibabaSVG.svg';
import HokimligSVG from '@assets/svg/hokimligSVG.svg';
import UzumSVG from '@assets/svg/uzumSVG.svg';

const Trust = () => {
  return (
    <div className={'container ' + styles.trustContainer}>
      <h2 className={styles.trustTitle}>Нам доверяют</h2>
      <div className={styles.aboutImages}>
        <img src={B2bDiscountSVG} alt='b2bDiscount' />
        <img src={EuroPagesSVG} alt='b2bDiscount' />
        <img src={EvernoteSVG} alt='b2bDiscount' />
        <img src={AlibabaSVG} alt='b2bDiscount' />
        <img src={UzumSVG} alt='b2bDiscount' />
        <img src={HokimligSVG} alt='b2bDiscount' />
      </div>
    </div>
  );
};

export default Trust;
