import React from 'react'
import styles from './styles.module.css'
import UsefulCard from '@components/UsefulCard'

const AllCompanies = () => {
  return (
    <div className={'container ' + styles.allCompanies} >
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
        <UsefulCard />
    </div>
  )
}

export default AllCompanies