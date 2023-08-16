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
        <img data-aos="flip-left" src={B2bDiscountSVG} alt='b2bDiscount' />
        <img data-aos="flip-left" src={EuroPagesSVG} alt='b2bDiscount' />
        <img data-aos="flip-left" src={EvernoteSVG} alt='b2bDiscount' />
        <img data-aos="flip-left" src={AlibabaSVG} alt='b2bDiscount' />
        <img data-aos="flip-left" src={UzumSVG} alt='b2bDiscount' />
        <img data-aos="flip-left" src={HokimligSVG} alt='b2bDiscount' />
      </div>
    </div>
  );
};

export default Trust;
