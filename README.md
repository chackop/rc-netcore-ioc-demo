## IOC container based on React using inversify

A project to showcase an react based IOC container called generated from a .net template

Demoing IOC containers as follows:

- Converted the original (src/components/Counter.tsx) that was using the redux to using a a counter service (src/services/CounterService.ts) via an IOC that is configured under inversify.config.ts. Showcased both in class and functional component.

- Abstracted the weather data fetching logic under src/components/FetchData.tsx to a src/services/CachedWeatherService that has a cache mechanism instead of fetching the data everytime on navigation. Again the service was exposed via an IOC configured under inversify.config.ts and replaced redux when using it under fetch data

- Also demonstrated interchangeability of an IOC by typing the weather service using services/IWeatherService.ts and applying a new service LocalhostWeatherService.ts that does not have caching.
