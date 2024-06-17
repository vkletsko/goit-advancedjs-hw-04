import { fetchImages } from './images-api/pixabay-service.js';
import { createImagesMarkup } from './helpers/createImagesmarkup.js';
import { cardsSmoothScroll } from './helpers/cardsSmoothScroll.js';

import SimpleLightbox from 'simplelightbox';
import { Tooltip } from 'bootstrap';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'bootstrap/scss/bootstrap.scss';
import '../css/hw-04.scss';

// Refereences to DOM-elements
const refs = {
  searchForm: document.forms.searchForm,
  container: document.querySelector('[data-gallery]'),
  loadMoreBtn: document.querySelector('[data-load-more]'),
};
// Query params for request to pixabay
const queryParams = {
  currentPage: 1,
  searchQuery: '',
};
// Lightbox modal
const lightbox = new SimpleLightbox('[data-gallery] a');
// Bootstrap tooltips for image inforamtion
const initTooltip = selector => {
  const tooltipTriggerList = document.querySelectorAll(selector);
  [...tooltipTriggerList].map(
    tooltipTriggerEl => new Tooltip(tooltipTriggerEl)
  );
};
// Handlers
const onSearchFormSubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget;
  queryParams.searchQuery = form.elements.searchInput.value.trim();
  queryParams.currentPage = 1;
  try {
    refs.container.innerHTML = '';
    refs.loadMoreBtn.classList.add('d-none');
    const { hits, isEndOfCollection } = await fetchImages(queryParams);
    refs.container.insertAdjacentHTML('beforeend', createImagesMarkup(hits));
    lightbox.refresh();
    initTooltip('[data-bs-toggle="tooltip"]');

    if (isEndOfCollection) return;
    refs.loadMoreBtn.classList.remove('d-none');
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    queryParams.currentPage += 1;
    const { hits, isEndOfCollection } = await fetchImages(queryParams);
    refs.container.insertAdjacentHTML('beforeend', createImagesMarkup(hits));
    lightbox.refresh();
    initTooltip('[data-bs-toggle="tooltip"]');
    cardsSmoothScroll('[data-gallery]');
    if (isEndOfCollection) {
      refs.loadMoreBtn.classList.add('d-none');
    }
  } catch (error) {
    console.log(error);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
