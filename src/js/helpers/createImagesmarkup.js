import icons from '/sprite.svg';

export const createImagesMarkup = data => {
  return data.reduce((markup, hit) => {
    const {
      webformatURL,
      webformatWidth,
      webformatHeight,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = hit;
    return (markup += `<a
          class="info-card d-flex flex-column text-decoration-none"
          href="${largeImageURL}"
        >
          <div class="rounded overflow-hidden flex-grow-1 shadow">
            <img
              class="info-ill"
              src="${webformatURL}"
              alt="${tags}"
              width="${webformatWidth}"
              heigth="${webformatHeight}"
            />
          </div>
          <div class="info-list d-grid text-center">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Likes: ${likes}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${icons}#likes"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Views: ${views}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${icons}#views"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Comments: ${comments}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${icons}#comment"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Downloads: ${downloads}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${icons}#download"></use>
              </svg>
            </button>
          </div>
        </a>`);
  }, '');
};
