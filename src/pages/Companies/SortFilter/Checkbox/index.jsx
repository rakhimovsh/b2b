import React, { useState } from 'react'
import styles from './styles.module.css'

const Checkbox = () => {
    const [popular, setPopular] = useState(false)
    const [rating, setRating] = useState(false) 
    const [newest, setNewest] = useState(false) 
    const [priceUp, setpriceUp] = useState(false) 
    const [priceDown, setPriceDown] = useState(false) 
  return (
    <>
        <p className={popular ? styles.active : styles.notActive} onClick={()=> setPopular(!popular)}>По популярности</p>
        <p className={rating ? styles.active : styles.notActive} onClick={()=> setRating(!rating)}>По рейтингу</p>
        <p className={newest ? styles.active : styles.notActive} onClick={()=> setNewest(!newest)}>По  новизне</p>
        <p className={priceUp ? styles.active : styles.notActive} onClick={()=> setpriceUp(!priceUp)}>Цены: по возрастанию</p>
        <p className={priceDown ? styles.active : styles.notActive} onClick={()=> setPriceDown(!priceDown)}>Цены: по убыванию</p>
    </>
  )
}

export default Checkbox