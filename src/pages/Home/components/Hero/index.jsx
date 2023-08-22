import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroForm from '@components/HeroForm/index.jsx';
import styles from './styles.module.css';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';
import { getProducts } from '@/redux/actions/product.js';
import { getAllCompanies } from '@/redux/actions/company.js';
import {getImage} from "@/utils/api.js";

const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const { products } = useSelector((state) => state.product);
  const { companies } = useSelector((state) => state.company);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [products]);

  useEffect(() => {
    if (products.items.length) {
      const result = companies.items?.filter((el) => {
        for (let product of products.items) {
          return el?.id === product?.campany;
        }
      });
      setFilteredCompanies(result);
    } else {
      setFilteredCompanies([])
    }
  }, [companies]);
  const handleSearchBtn = () => {
    if (search) {
      dispatch(getProducts(search));
    } else {
      setFilteredCompanies([])
    }
  };
  return (
    <div className={styles.heroBg}>
      <div className={'container ' + styles.heroContainer}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>Оптовый рынок для каждого случая</h1>
          <p className={styles.heroText}>
            Мы поможем вам найти товары произведенные в Узбекистане напрямую от производителей
          </p>
          <div className={styles.heroProductCategory}>
            <div className={styles.heroSearch}>
              <input
                placeholder='Название продукта'
                className={styles.heroCategory_search}
                type='text'
                onChange={(evt) => setSearch(evt.target.value)}
              />

              <button onClick={handleSearchBtn} className={styles.heroSearch_button}>
                <SearchSvg />
              </button>
            </div>
            <div
              style={{ display: filteredCompanies.length ? 'flex' : 'none' }}
              className={styles.searchResult}
            >
              {filteredCompanies?.map((el) => (
                <div onClick={() => navigate(`/company/info/${el?.id}`)} key={el?.id} className={styles.searchResult_item}>
                  <img className={styles.image} src={getImage(el?.image)} alt='company logo'/>
                  <div>
                    <h4 className={styles.searchCompany_name}>{el?.name}</h4>
                    <p className={styles.searchCompany_product}>{el?.type_product?.translations[lang]?.name }</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
