import styles from './styles.module.css';
import CompanyCard from '@components/CompanyCard';
import CompanyPages from './components/CompanyPages';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { useTranslation } from 'react-i18next';

const Producers = () => {
  const {t} = useTranslation()
  const { companies } = useSelector((state) => state.company);
  const [page, setPage] = useState(1);
  const [sortedCompanies, allPages] = usePagination(companies.items, page, 9);

  return (
    <div className={'container ' + styles.producers}>
      <Filter />
      <div className={styles.companyContainer}>
        {sortedCompanies.length ? (
          sortedCompanies?.map((company) => <CompanyCard key={company?.id} company={company} />)
        ) : (
          <h3>{t('companies.noCompany')}</h3>
        )}
      </div>
      <CompanyPages allPages={allPages} page={page} setPage={setPage} />
    </div>
  );
};

export default Producers;
