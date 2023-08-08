import React from 'react'
import styles from './styles.module.css'
import FAQ from '@components/FAQ'

const FAQHome = () => {
  return (
    <div className={'container ' + styles.faqHome}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <FAQ />
    </div>
  )
}

export default FAQHome