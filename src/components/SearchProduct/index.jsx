import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import BoxImage from '@assets/images/box-image.png';
import { getAllCategories } from '@/redux/actions/category.js';
import { getAllSubcategories } from '@/redux/actions/subcategory.js';
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'

const SearchProduct = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const lang = i18n.language;
  const { categories } = useSelector((state) => state.category);
  const { subcategories } = useSelector((state) => state.subcategory);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubcategories());
  }, []);

  const handleCategoryChange = (evt) => {
    const result = subcategories.items?.filter(subcategory => subcategory.category == evt.target.value)
    setFilteredSubcategories(result)
  };
  return (
    <div className={styles.productSearchCard}>
      <h3 className={styles.productSearch_title}>Пользуйтесь B2B чтобы найти продукт</h3>
      <div className={styles.productSearch_inputs}>
        <div className={styles.selectCategory_box}>
          <select
            onChange={handleCategoryChange}
            className={styles.selectCategory}
            name='selectCategory'
            id=''
          >
            <option value='category-first' hidden>
              Категория продукта
            </option>
            {categories.items?.map((category) => (
              <option key={category?.id}  style={{width:'100px',height:"200px"}} value={category?.id}>
                {category?.translations[lang]?.name}
              </option>
            ))}
          </select>
          <IconDown className={styles.selectIcon}/>
        </div>
        <div className={styles.selectCategory_box}>
          <select disabled={!filteredSubcategories.length} className={styles.selectCategory} name='selectCategory' id=''>
            <option value='category-first' hidden>
              Подкатегория продукта
            </option>
            {
              filteredSubcategories?.map(subcategory => (
                <option key={subcategory?.id} value='category-first'>{subcategory.translations[lang]?.name}</option>
              ))
            }
          </select>
          <IconDown className={styles.selectIcon}/>
        </div>
        <input
          type='text'
          placeholder='Введите название продукта'
          className={styles.productName_input}
        />
      </div>
      <button className={styles.productSearch_button}>Посмотреть все продукты</button>
      <img className={styles.search_boxImage} src={BoxImage} alt='box' />
    </div>
  );
};

export default SearchProduct;
