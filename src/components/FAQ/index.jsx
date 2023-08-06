import styles from './styles.module.css';


import {ReactComponent as PlusSvg} from '@assets/svg/plusSvg.svg'
import {useState} from "react";


const FAQ = () => {
  return (
    <div className={'container ' + styles.faqContainer}>
      <div>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
        <Accordion title="Особенности транспортировки грузов в Европе">
          Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do e
        </Accordion>
      </div>
    </div>
  )
}

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.faqQuestion} onClick={() => setExpand(expand => !expand)}>
        <span className={styles.faqText}>{title}</span>
        <button className={styles.faqButton}><PlusSvg/></button>
      </div>
      {expand && <div className={styles.content}>{children}</div>}
    </div>
  )
}


export default FAQ