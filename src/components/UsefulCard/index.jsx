import styles from './styles.module.css';

import UsefulImage1 from '@assets/images/usefulImg1.png';
import UsefulImage2 from '@assets/images/usefulImg2.png';
import UsefulImage3 from '@assets/images/usefulImg3.png';

const usefulCardData = [
  {
    image: UsefulImage1,
  }
];

const UsefulCard = () => {
  return (
    <>
      {usefulCardData.map((usefulCardInfo) => {
        return (
          <div className={styles.usefulCard}>
            <img className={styles.usefulImage} src={usefulCardInfo.image} alt='ship' />
            <p className={styles.usefulDate}>2.06.2023</p>
            <p className={styles.usefulCard_name}>
              Kokand: how the country manages its exports in times
            </p>
            <p className={styles.usefulCard_text}>
              Freight rates on Asian routes have been in a downwa...
            </p>
            <p className={styles.usefulCard_more}>Подробно</p>
          </div>
        );
      })}
    </>
  );
};

export default UsefulCard;
