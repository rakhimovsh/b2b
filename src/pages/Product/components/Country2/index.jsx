import React, { useState, useRef, useEffect } from 'react';
import options from "@/data/countries";
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';

const Country2 = ({setCountry}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const {t} = useTranslation()
  const inputRef = useRef(null);
  const suggestionListRef = useRef(null);

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
        placeholder={t('products.country')}
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

export default Country2;
