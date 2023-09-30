import React, { useState, useRef, useEffect } from 'react';
import options from "@/data/countries.js";

import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Countries = ({ setCountry}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const suggestionListRef = useRef(null);
  const {t} = useTranslation()
  const handleInputFocus = () => {
    // Show all options when the input is focused
    setSuggestions(options);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the options based on the input value
    const filteredOptions = options.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredOptions);
  };

  const handleSuggestionClick = (value) => {
    setInputValue(value.name);
    setSuggestions([]);
    setCountry(value.code);
    // navigate(`/companies?country=${value.code}`)
    // console.log('veve', value.code);
  };

  const handleWindowClick = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      suggestionListRef.current &&
      !suggestionListRef.current.contains(e.target)
    ) {
      // Clicked outside of both the input and suggestion list
      setSuggestions([]);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div className={styles}>
      <input
        type="text"
        placeholder={t('companies.searchCompanies.country')}
        value={inputValue}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        ref={inputRef}
        className={styles.countryInput}
      />
      {suggestions.length > 0 && (
        <div className={styles.suggestionContainer} ref={suggestionListRef}>
          <div className={styles.suggestionList}>
            {suggestions.map((option, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSuggestionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Countries;
