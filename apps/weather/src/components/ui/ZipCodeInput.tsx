import React, { useState } from 'react';

interface ZipCodeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter zip code',
  className = '',
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    onChange?.(val);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white mb-4 ${className}`}
      inputMode="numeric"
      pattern="\d*"
      maxLength={10}
      autoComplete="postal-code"
    />
  );
};

export default ZipCodeInput;
