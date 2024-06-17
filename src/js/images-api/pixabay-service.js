import { BASE_URL, API_KEY, PER_PAGE } from './config.js';
import { showToast } from '../helpers/toasts.js';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

const paramsObj = {
  key: API_KEY,
  per_page: PER_PAGE,
  safesearch: true,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const fetchImages = async ({ searchQuery, currentPage: page } = {}) => {
  const response = await axios({
    params: { ...paramsObj, q: searchQuery, page },
  });
  const { data, status } = response;
  const totalPages = Math.ceil(data.total / PER_PAGE);
  const isEndOfCollection = page >= totalPages || totalPages === 1;
  if (status !== 200) {
    showToast({
      message: 'Sorry, something went wrong on server.',
      customClass: 'bg-danger',
    });
    return {
      hits: data.hits,
      isEndOfCollection,
    };
  }
  if (!data.total) {
    showToast({
      message:
        'Sorry, there are no images matching your search query. Please try again.',
      customClass: 'bg-info',
    });
    return {
      hits: data.hits,
      isEndOfCollection,
    };
  }

  if (page < 2) {
    showToast({
      message: `Hooray! We found ${data.totalHits} images.`,
      customClass: 'bg-success',
    });
  }

  if (isEndOfCollection) {
    showToast({ message: 'End of collection.', customClass: 'bg-warning' });
    return {
      hits: data.hits,
      isEndOfCollection,
    };
  }

  return {
    hits: data.hits,
    isEndOfCollection,
  };
};
