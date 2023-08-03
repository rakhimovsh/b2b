import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as StarSVG } from '@assets/svg/StarSVG.svg';

const RatingStars = () => {
  return (
    <div>
              <button className={styles.ratingStar}>
                <StarSVG />
              </button>
              <button className={styles.ratingStar}>
                <StarSVG />
              </button>
              <button className={styles.ratingStar}>
                <StarSVG />
              </button>
              <button className={styles.ratingStar}>
                <StarSVG />
              </button>
              <button className={styles.ratingStar}>
                <StarSVG />
              </button>
    </div>
  )
}

export default RatingStars