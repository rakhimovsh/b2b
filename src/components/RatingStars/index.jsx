import React from 'react';
import styles from './styles.module.css';
import { ReactComponent as StarSVG } from '@assets/svg/StarSVG.svg';

const RatingStars = ({ ratingCount }) => {
  ratingCount = Math.round(ratingCount);
  const arr = new Array(ratingCount || 0).fill(0);
  return (
    <div>
      {
        arr?.map((el, i) =>(
          <button key={i} className={styles.ratingStar}>
            <StarSVG />
          </button>
        ))
      }
    </div>
  );
};

export default RatingStars;
