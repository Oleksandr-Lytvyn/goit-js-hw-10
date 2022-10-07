import './css/styles.css';
import { fetchCountries } from './scripts/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');

const debouncedInput = debounce(onInput, DEBOUNCE_DELAY);
inputRef.addEventListener('input', debouncedInput);

function onInput(event) {
  const country = event.target.value.trim();

  if (country !== '') {
    fetchCountries(country).then(createMarkup);
    //   .catch(error => {
    //     Notify.error('Oops, there is no country with that name');
    //   });
  } else if (!country) {
    countryListRef.innerHTML = '';
  }
}

function createMarkupList(event) {
  let markupString = '';
  if (event.length <= 10) {
    for (let i = 0; i < event.length; i++) {
      const country = event[i].name.official;
      const flag = event[i].flag;
      markupString += `<li>
        <h3>${flag}${country}</h3>
    </ul>`;
    }
    countryListRef.innerHTML = markupString;
  }
}

function createMarkupInfo(event) {
  let markupString = '';
  if (event.length === 1) {
    const capital = event[0].capital[0];
    const population = event[0].population;
    const country = event[0].name.official;
    const languages = Object.values(event[0].languages)[0];
    const flag = event[0].flag;
    for (let i = 0; i < event.length; i++) {
      markupString += `<li>
        <h3>${flag}${country}</h3>
        <p>Capital:${capital}</p>
        <p>Population:${population}</p>
        <p>Languages:${languages}</p>
      </li>
    </ul>`;
    }
    // console.log(markupString);
    countryListRef.innerHTML = markupString;
  }
}

function createMarkup(event) {
  createMarkupList(event);
  createMarkupInfo(event);
  notifications(event);
}

function notifications(event) {
  if (event.length >= 10) {
    Notify.info('Too many matches found. Please enter a more specific name.', {
      clickToClose: true,
    });
  }
}
