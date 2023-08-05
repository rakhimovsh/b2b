import styles from './styles.module.css';
import ContactUs from '@components/ContactUs/index.jsx';

import Box from '@assets/images/box-2.png'

const ForCompanies = () => {
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Для покупателей</h2>
          <ol className={styles.list}>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It was popularised in the 1960s with the release of Letraset sheets containing m
              passages, and more recently with desktop publishing software like Aldus PageMaker
              including version
            </li>
            <li>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </li>
          </ol>
        </div>
        <div className={styles.right}>
          <img src={Box} alt='box' width={332}/>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default ForCompanies;
