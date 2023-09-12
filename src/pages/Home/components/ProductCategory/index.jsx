import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {createSearchParams, useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import Carousel from '@components/Carousel/index.jsx';

const ProductCategory = () => {
  const { categories } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const handleClick = (id) => {
    navigate({
      pathname: "product",
      search: `?${createSearchParams({subcategoryId: id})}`
    })
  };

  return (
    <div className={'container ' + styles.productCategoryContainer}>
      <div style={{display: 'flex', alignItems: 'center'}} className={styles.categoryTitle}>
        <h3 className={styles.productCategory_title}>Просмотрите товары по категориям</h3>
      </div>
      <Carousel slides=
          {categories.items?.map((category) => (
            <div className={styles.productCategory_box}>
              <div key={category?.id} className={styles.productCategory_card}>
                <div className={styles.productImage2_bg}>
                  <img src={category?.image}  alt='thread' />
                </div>
                <div className={styles.categoryContent}>
                  <p className={styles.productCategory_name}>{category.translations[lang]?.name}</p>
                </div>
                  {category?.subcategories.slice(0, 4).map((subcategory) => (
                    <p
                      onClick={() => handleClick(subcategory?.id)}
                      key={subcategory?.id}
                      className={styles.productCategory_text}
                    >
                      {subcategory.translations[lang]?.name}
                    </p>
                  ))}
              </div>
            </div>
          ))}
      
      
      />
    </div>
  );
};

export default ProductCategory;
