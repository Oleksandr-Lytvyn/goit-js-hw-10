import './css/styles.css';
import { fetchCountries } from './scripts/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');

const debouncedInput = debounce(onInput, DEBOUNCE_DELAY);
inputRef.addEventListener('input', debouncedInput);
function onInput(event) {
  const country = event.target.value;
  if (country !== '') {
    fetchCountries(country);
  }
}
