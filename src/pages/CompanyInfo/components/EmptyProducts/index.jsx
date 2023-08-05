import styles from './styles.module.css'

import EmptyBox from '@assets/images/empty-box.png'


const EmptyProducts = () => {
  return (
    <div className={styles.emptyProducts}>
      <div className={styles.emptyProducts_content}>
        <h2>
          К сожалению, товары этого продавца не найдено
        </h2>
        <p>Советуем посмотреть на другие компании</p>
      </div>
      <img src={EmptyBox} alt='empty box'/>
    </div>
  )
};


export default EmptyProducts
