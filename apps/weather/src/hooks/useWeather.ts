import { useQuery } from '@tanstack/react-query';

// Fetch posts
export function useWeather(zipCode?: number) {
  return useQuery({
    queryKey: ['weather', zipCode],
    queryFn: async () => {
      if (!zipCode) throw new Error('Zip code required');

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    },
    enabled: Boolean(zipCode), // Only run query if zipCode is provided
    staleTime: 50 * 60 * 1000, // 50 minutes
  });
}
