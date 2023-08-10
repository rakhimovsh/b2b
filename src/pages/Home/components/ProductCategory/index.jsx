import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const ProductCategory = () => {
  const { categories } = useSelector((state) => state.category);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className={'container ' + styles.productCategoryContainer}>
      <h3 className={styles.productCategory_title}>Просмотрите товары по категориям</h3>
      <div className={styles.productCategory_box}>
        {categories.items?.map((category) => (
          <div key={category?.id} className={styles.productCategory_card}>
            <div className={styles.productImage2_bg}>
              <img src={category?.image} style={{ borderRadius: '50%' }} alt='thread' />
            </div>
            <p className={styles.productCategory_name}>{category.translations[lang]?.name}</p>
            {
              category?.subcategories.map((subcategory) => (
                <p key={subcategory?.id} className={styles.productCategory_text}>{subcategory.translations[lang]?.name}</p>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
