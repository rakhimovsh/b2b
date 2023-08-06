import styles from './styles.module.css';
import ContactUs from '@components/ContactUs';

import Shield from '@assets/images/shield.png';

const ReturnPolicy = () => {
  return (
    <div className={'container ' + styles.container}>
      <aside className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Политика возврата товара</h2>
          <img className={styles.img} src={Shield} alt='shield' />
        </div>
        <ol className={styles.list}>
          <li>
            ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It was popularised in the 1960s with the release of Letraset sheets containing m
            passages, and more recently with desktop publishing software like Aldus PageMaker
            including version
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </li>
        </ol>
      </aside>
      <ContactUs />
    </div>
  );
};

export default ReturnPolicy;
