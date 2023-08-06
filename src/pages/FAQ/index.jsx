import styles from './styles.module.css';
import ContactUs from '@components/ContactUs';
import FAQComponent from '@components/FAQ';

import Message from '@assets/images/message.png';

const FAQ = () => {
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <img className={styles.img} src={Message} alt='image' />
        </div>
        <FAQComponent />
      </div>
      <ContactUs />
    </div>
  );
};

export default FAQ;
