import React from 'react'
import styles from './style.module.css'

const Sort = () => {
  return (
    <div className={styles.sortBox}>
        <h3 className={styles.sortTitle}>Сортировка</h3>
        <p className={styles.sortName}>По популярности</p>
        <p className={styles.sortName}>По рейтингу</p>
        <p className={styles.sortName}>По  новизне</p>
        <p className={styles.sortName}>Цены: по возрастанию</p>
        <p className={styles.sortName}>Цены: по убыванию</p>
    </div>
  )
}

export default Sort