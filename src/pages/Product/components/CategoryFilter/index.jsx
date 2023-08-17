import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as CloseIcon } from '@assets/svg/redClose.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '@/redux/actions/category.js';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '@/redux/actions/product.js';

const Subcategory = ({
  subcategories,
  setChecked,
  checked,
  isOpened,
  setIsOpened,
  categoryId,
  dispatch,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const sortedSubcategory = subcategories.find((c) => checked.includes(c?.id));
    if (sortedSubcategory) setIsOpened((prev) => [...prev, categoryId]);
  }, [checked]);
  const handleChange = (evt, id) => {
    const isChecked = evt.target.checked;
    if (isChecked) {
      setChecked((prev) => [...prev, id]);
    } else {
      setChecked((prev) => prev.filter((el) => el !== id));
    }
  };
  return (
    <ul
      style={{ display: isOpened.includes(categoryId) ? 'flex' : 'none' }}
      className={styles.subcategoryList}
    >
      {subcategories?.map((sCategory) => (
        <li className={styles.subcategoryItem} key={sCategory?.id}>
          <input
            onChange={(evt) => handleChange(evt, sCategory?.id)}
            type='checkbox'
            checked={checked.includes(sCategory?.id)}
            id={sCategory?.id}
          />
          <label htmlFor={sCategory?.id}>{sCategory.translations[lang]?.name}</label>
        </li>
      ))}
    </ul>
  );
};

const CategoryFilter = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [searchParams, setSearchParams] = useSearchParams();
  const subcategoryId = searchParams.get('subcategoryId');
  const search = searchParams.get('search') || '';
  const [checkedSubcategories, setCheckedSubcategories] = useState([+subcategoryId]);
  const [openedCategoryIds, setOpenedCategoryIds] = useState([]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    dispatch(getProducts(search, checkedSubcategories));
    searchParams.delete("search")
  }, [search, checkedSubcategories])
  const handleCategoryTitle = (categoryId) => {
    if (openedCategoryIds.includes(categoryId)) {
      setOpenedCategoryIds((prev) => prev.filter((el) => el !== categoryId));
    } else {
      setOpenedCategoryIds((prev) => [...prev, categoryId]);
    }
  };
  return (
    <div className={styles.categoryFilter_box}>
      <h3 className={styles.categoryTitle}>Категории</h3>
      <div className={styles.categoryBox}>
        {categories.items?.map((category) => (
          <div key={category?.id}>
            <h4
              onClick={() => handleCategoryTitle(category?.id)}
              className={styles.categoryItemTitle}
            >
              {category?.translations[lang]?.name}
            </h4>
            <Subcategory
              subcategories={category?.subcategories}
              setChecked={setCheckedSubcategories}
              checked={checkedSubcategories}
              isOpened={openedCategoryIds}
              setIsOpened={setOpenedCategoryIds}
              categoryId={category?.id}
              dispatch={dispatch}
            />
          </div>
        ))}
        <div
          className={styles.closeButton}
          onClick={() => {
            setCheckedSubcategories([]);
            setOpenedCategoryIds([]);
          }}
        >
          <CloseIcon /> <p className={styles.clearFilter}>очистить фильтр</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
