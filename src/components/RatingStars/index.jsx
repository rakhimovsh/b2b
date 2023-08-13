import React, {useEffect, useState} from 'react';
import {ReactComponent as StartIcon} from "@assets/svg/StarSVG.svg";
import styles from "./styles.module.css";

const Rating = ({rating, setRating, isEditable, ...props}) => {
  const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));
  useEffect(()=>{
    constructorRating(rating);
  }, [rating]);
  const constructorRating = (currentRating) =>{
    const updatedArray = ratingArray.map((r, i)=>{
      return <span onMouseEnter={()=> changeDisplay(i+1)}
                   onMouseLeave={()=> changeDisplay(rating)}
                   onClick={()=> onClick(i+1)}
                   className={`${styles.star} ${currentRating > i ? styles.fill : ""} ${isEditable ? styles.editable : ""}`}
      >
               <StartIcon
                 tabIndex={isEditable ? 0:-1}
                 onKeyDown={(evt)=> keydownHandle(evt, i+1)}
               />
           </span>;

    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i)=>{
    if(!isEditable) return;
    constructorRating(i);
  };
  const onClick = (i)=>{
    if(!isEditable || !setRating) return;
    setRating(i);
  };

  const keydownHandle = (evt, i)=>{
    if(!isEditable || !setRating) return;
    if(evt.code === "Space"){
      setRating(i);
    }
  };

  return (
    <div {...props}>
      {
        ratingArray.map((el, i)=>{
          return <span key={i}>{el}</span>;
        })
      }
    </div>
  );
};

export default Rating;