import React from 'react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

const Checkbox = ({ subcategories, setChecked }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const getChecked = (prevState, subcategoryId, evt) => {
    const isChecked = evt.target.checked;
    if (prevState.includes(subcategoryId) || !isChecked) {
      return prevState.filter(el => el !== subcategoryId)
    } else {
      return [...prevState, subcategoryId]
    }
  };

  return (
    <>
      {subcategories.map((subcategory) => {
        return (
          <div key={subcategory?.id} className={styles.checkboxLabel}>
            <div className={styles.checkboxItem}>
              <input
                onChange={(evt) => setChecked((prev) => getChecked(prev, subcategory?.id, evt))}
                type='checkbox'
                name='productOne'
              />
              <label htmlFor='productOne'>{subcategory?.translations[lang]?.name}</label>
            </div>
            <p className={styles.productNumber}>{subcategory?.length}</p>
          </div>
        );
      })}
    </>
  );
};

export default Checkbox;
