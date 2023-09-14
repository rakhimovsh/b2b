import React, { useState } from 'react'
import styles from './styles.module.css'
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'
import Placefilter from '../../../Producers/components/Filter/PlaceFilter'

const Country = () => {
    const [openPlace, setOpenPlace] = useState(false)
    const [place, setPlace] = useState('Расположение  компании')

    return (
        <div className={styles.companyPlace_box}>
            <div  onClick={() => {setOpenPlace(!openPlace)}} className={styles.placeFilter}>
                <p className={styles.filterName}>{typeof place === "string" ? place : place.name}</p><IconDown />
            </div>
            { openPlace && 
                <div className={styles.placeCheckboxes}>
                    <Placefilter setPlace={setPlace} place={place}/>
                </div>
            }     
        </div> 
  )
}

export default Country