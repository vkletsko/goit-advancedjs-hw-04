import { Toast } from 'bootstrap';

export const showToast = ({ message, customClass }) => {
  const toastContainer = document.getElementById('toastContainer');

  const toastEl = document.createElement('div');
  toastEl.classList.add('toast', 'align-items-center', customClass);
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');

  // Контент Toast
  toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body text-white">
            ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
  `;

  toastContainer.appendChild(toastEl);

  const toast = new Toast(toastEl, {
    delay: 2000,
  });
  toast.show();
};
