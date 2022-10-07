import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages
`).then(response => {
    if (!response.ok) {
      Notify.failure('Oops, there is no country with that name', {
        clickToClose: true,
      });
    }
    return response.json();
  });
}
