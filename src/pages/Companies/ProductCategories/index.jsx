import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as CloseIcon } from '@assets/svg/redClose.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '@/redux/actions/category.js';
import { useNavigate, useSearchParams  } from 'react-router-dom';
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
    // console.log('checked' , checked)
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

const ProductCategories = ({ checkedSubcategories , setCheckedSubcategories}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const [searchParams, setSearchParams] = useSearchParams();
  const subcategoryIds = searchParams.get('subcategoryIds');
  const search = searchParams.get('search') || '';
  // const [checkedSubcategories, setCheckedSubcategories] = useState([]);
  const [openedCategoryIds, setOpenedCategoryIds] = useState([]);
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  // useEffect(() => {
    // dispatch(getProducts(search, checkedSubcategories));
    // searchParams.delete("search")
  // }, [search, checkedSubcategories])

  const handleCategoryTitle = (categoryId) => {
    if (openedCategoryIds.includes(categoryId)) {
      setOpenedCategoryIds((prev) => prev.filter((el) => el !== categoryId));
    } else {
      setOpenedCategoryIds((prev) => [...prev, categoryId]);
    } 
  };


  return (
    <div className={styles.categoryFilter_box}>
      <h3 onClick={() => {setOpenFilter(!openFilter)}} className={styles.categoryTitle}>{t('companies.searchCompanies.category')}</h3>
      <div className={!openFilter ? styles.categoryBox : styles.filterDisplay} >
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
          <CloseIcon /> <p className={styles.clearFilter}>{t('companies.searchCompanies.clearFilter')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
