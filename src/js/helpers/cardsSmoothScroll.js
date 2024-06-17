export const cardsSmoothScroll = (selector = '[data-gallery]') => {
  if (!selector) return;

  const { height: cardHeight } = document
    .querySelector('[data-gallery]')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
