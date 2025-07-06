'use client';

import WeatherPage from '@/components/ui/Weather';
import ZipCodeInput from '@/components/ui/ZipCodeInput';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>(''); // Input field value
  const [zipCode, setZipCode] = useState<number | undefined>(undefined); // Debounced value for API call

  // Debounce effect - wait 500ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue && !isNaN(Number(inputValue))) {
        setZipCode(Number(inputValue));
      } else {
        setZipCode(undefined);
      }
    }, 2000); // 2000ms delay

    // Cleanup timer if user types again before delay
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <main>
      <h1>Weather App</h1>
      <ZipCodeInput
        placeholder="Enter zip code"
        className="mb-4 w-full max-w-md mx-auto"
        onChange={(value) => {
          setInputValue(value);
          console.log('Zip code changed:', value);
        }}
      />
      <WeatherPage zipCode={zipCode} />
    </main>
  );
}
