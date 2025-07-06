'use client';

import { useWeather } from '@/hooks/useWeather';

export default function WeatherPage({ zipCode }: { zipCode?: number }) {
  const { data: weather, isLoading, error } = useWeather(zipCode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
        <p>{JSON.stringify(weather, null, 2)}</p>
      </div>
    </div>
  );
}
