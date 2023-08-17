import React from 'react'
import Countries from './data.js'
import styles from './styles.module.css'
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'

const CountrySelect = ({ name, setPhoneNumber }) => {
  const handleChange = (evt) => {
    if(setPhoneNumber) {
      const res = Countries.find(country => country.name === evt.target.value)
      setPhoneNumber(res.dial_code)
    }
  }
  return (
    <div className={styles.countrySelect_box}>
      <select defaultValue="Uzbekistan" onChange={handleChange} id='country' name={name} className={styles.countrySelect}>
        {
          Countries.map(country => (
            <option key={country.code} value={country.name}>{country.name}</option>
          ))
        }
      </select>
      <IconDown className={styles.selectIcon} />
    </div>
  );
};

export default CountrySelect