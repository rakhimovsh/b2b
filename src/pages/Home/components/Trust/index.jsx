import styles from './styles.module.css';
import ElitKorserva from '@assets/images/Elit-Korserva.png'
import IndoramaFertiliser from '@assets/images/Indorama-Fertilisers.png'
import IndoramaTextile from '@assets/images/Indorama-Textile.png'
import EuroPrint from '@assets/images/EMGU-Eur-Print-Kokand.png'

const Trust = () => {
  return (
    <div className={'container ' + styles.trustContainer}>
      <h2 className={styles.trustTitle}>Нам доверяют</h2>
      <div className={styles.aboutImages}>
        <img className={styles.trustImage} data-aos="flip-left" src={ElitKorserva} alt='b2bDiscount' />
        <img className={styles.trustImage}  data-aos="flip-left" src={IndoramaFertiliser} alt='b2bDiscount' />
        <img className={styles.trustImage}  data-aos="flip-left" src={IndoramaTextile} alt='b2bDiscount' />
        <img className={styles.trustImage}  data-aos="flip-left" src={EuroPrint} alt='b2bDiscount' />
      </div>
    </div>
  );
};

export default Trust;
