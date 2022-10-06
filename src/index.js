import './css/styles.css';
import { fetchCountries } from './scripts/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');

const debouncedInput = debounce(onInput, DEBOUNCE_DELAY);
inputRef.addEventListener('input', debouncedInput);

function onInput(event) {
  const country = event.target.value.trim();

  if (country !== '') {
    fetchCountries(country).then(createMarkup);
  }
}

function createMarkupList(event) {
  let markupString = '';
  const countryListRef = document.querySelector('.country-list');
  if (event.length <= 10) {
    for (let i = 0; i < event.length; i++) {
      const capital = event[i].capital[0];
      const population = event[i].population;
      const country = event[i].name.official;
      const languages = Object.values(event[i].languages)[0];
      const flag = event[i].flag;
      markupString += `<li>
        <h3>${flag}${country}</h3>
    </ul>`;
    }
    // console.log(markupString);
    countryListRef.innerHTML = markupString;
  }
}

function createMarkupInfo(event) {
  let markupString = '';
  const countryListRef = document.querySelector('.country-list');
  //   console.log(countryListRef);
  if (event.length === 1) {
    const capital = event[0].capital[0];
    const population = event[0].population;
    const country = event[0].name.official;
    const languages = Object.values(event[0].languages)[0];
    const flag = event[0].flag;
    console.log(capital);
    console.log(population);
    console.log(country);
    console.log(languages);
    console.log(flag);
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
}
