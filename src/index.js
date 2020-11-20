import './assets/style.css';
import * as Page from './page-load';
import * as Weather from './weather';

Page.default();

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  Weather.default();
});
