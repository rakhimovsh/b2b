import styles from './styles.module.css';

import Box from '@assets/images/box.png';
import ContactUs from '@components/ContactUs';

const HowToBuyProduct = () => {
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Как приобрести товар</h2>
          <p className={styles.desc}>
            Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нами. Мы здесь, чтобы помочь
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>Сперва найдите товар который вы хотите купить</li>
            <li className={styles.item}>
              Свяжитесь с продавцом или же назмине на кнопку “Узнать оптовую цену”
            </li>
            <li className={styles.item}>
              Свяжитесь с продавцом или же назмине на кнопку “Узнать оптовую цену”
            </li>
            <li className={styles.item}>
              Свяжитесь с продавцом или же назмине на кнопку “Узнать оптовую цену”
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <img src={Box} alt='box' width={258} />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default HowToBuyProduct;
