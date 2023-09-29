import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import BoxImage from '@assets/images/box-image.png';
import { getAllCategories } from '@/redux/actions/category.js';
import { getAllSubcategories } from '@/redux/actions/subcategory.js';
import { ReactComponent as IconDown } from '@assets/svg/chevron-down.svg';

const SearchProduct = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation()
  const { i18n } = useTranslation();
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const lang = i18n.language;
  const { categories } = useSelector((state) => state.category);
  const { subcategories } = useSelector((state) => state.subcategory);
  const [openFilter, setOpenFilter] = useState(false)
  const [openSubFilter, setOpenSubFilter] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(`${t('home.productSearch.category')}`)
  const [selectedSubcategory, setSelectedSubcategory] = useState(`${t('home.productSearch.subcategory')}`)
  const [searchText, setSearchText] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubcategories());
  }, []);

  const handleCategoryChange = (category) => {
    setOpenFilter(prev => !prev)
    setFilteredSubcategories(category?.subcategories)
    setSelectedCategory(category?.translations[lang]?.name)
    setSelectedSubcategory('Субкатегория продукта')
  };
  const handleSearchBtn = () => {
    if (searchText || subcategoryId) {
      
      navigate({
        pathname: '/product',
        search: `?${createSearchParams({ search: searchText, subcategoryId })}`,
      });
    }
  };
  return (
    <div data-aos='fade-right' className={styles.productSearchCard}>
      <h3 className={styles.productSearch_title}>{t('home.productSearch.title')}</h3>
      <div className={styles.productSearch_inputs}>
        {/* <div className={styles.selectCategory_box}>
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
              <option
                key={category?.id}
                style={{ width: '100px', height: '200px' }}
                value={category?.id}
              >
                {category?.translations[lang]?.name}
              </option>
            ))}
          </select>
          <IconDown className={styles.selectIcon} />
        </div> */}
        <div>
          <div className={styles.selectCategory_box1} onClick={() => setOpenFilter(!openFilter)}>
            <p  className={styles.filterTitle}>{selectedCategory}</p> 
            <IconDown className={styles.selectIcon}/>
          </div>
          {openFilter && 
            <div className={styles.custom1}>
              {categories.items?.map((category) => (
                <div 
                  onClick={() => handleCategoryChange(category)} 
                  className={styles.custom2} 
                  key={category?.id}  
                  value={category?.id}
                >  
                  {category?.translations[lang]?.name}
                </div>
              ))}
            </div>
          } 
        </div>
        <div>
          <div style={{opacity: filteredSubcategories?.length ? 1 : 0.6}} className={styles.selectCategory_box1} onClick={() => filteredSubcategories?.length ? setOpenSubFilter(!openSubFilter) : null}>
            <p  className={styles.filterTitle} >{selectedSubcategory}</p> 
            <IconDown className={styles.selectIcon}/>
          </div>
          {openSubFilter && 
            <div className={styles.custom1}>
              {filteredSubcategories.map((sub) => (
                <div 
                  onClick={(e) => {setSelectedSubcategory(e.target.textContent); setOpenSubFilter(!openSubFilter); setSubcategoryId(sub?.id)}} 
                  className={styles.custom2} 
                  key={sub?.id}  
                  value={sub?.id}
                >  
                  {sub?.translations[lang]?.name}
                </div>
              ))}
            </div>
          } 
        </div>
        {/* <div className={styles.selectCategory_box}>
          <select
            onChange={(evt) => setSubcategoryId(evt.target.value)}
            disabled={!filteredSubcategories.length}
            className={styles.selectCategory}
            name='selectCategory'
            id=''
          >
            <option value='category-first' hidden>
              Подкатегория продукта
            </option>
            {filteredSubcategories?.map((subcategory) => (
              <option key={subcategory?.id} value={subcategory.id}>
                {subcategory.translations[lang]?.name}
              </option>
            ))}
          </select>
          <IconDown className={styles.selectIcon} />
        </div> */}
        <input
          onChange={(evt) => setSearchText(evt.target.value)}
          type='text'
          placeholder={t('home.productSearch.name')}
          className={styles.productName_input}
        />
      </div>
      <button onClick={handleSearchBtn} className={styles.productSearch_button}>
        {t('home.productSearch.seeMore')}
      </button>
      <img className={styles.search_boxImage} src={BoxImage} alt='box' />
    </div>
  );
};

export default SearchProduct;
