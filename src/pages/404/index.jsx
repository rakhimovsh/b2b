import styles from './styles.module.css'
import NotFoundImg from '@assets/images/not-found.png'


const NotFound = () =>{
  return (
    <div className={'container ' + styles.notFoundContainer}>
      <div>
        <h1>
          404 error
        </h1>
        <p>
          к сожалению ничего не найдено
        </p>
      </div>
      <div>
        <img className={styles.notFoundImg} src={NotFoundImg} alt='not found image'/>
      </div>
    </div>
  )
}

export default NotFound