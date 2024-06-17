import{T as C,a as u,S as E,b as $}from"./assets/vendor-d372bf38.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const P="https://pixabay.com/api/",S="44422939-551080d7da5d848bff65502fd",m=40,l=({message:n,customClass:e})=>{const a=document.getElementById("toastContainer"),t=document.createElement("div");t.classList.add("toast","align-items-center",e),t.setAttribute("role","alert"),t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.innerHTML=`
      <div class="d-flex">
        <div class="toast-body text-white">
            ${n}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
  `,a.appendChild(t),new C(t,{delay:2e3}).show()};u.defaults.baseURL=P;const M={key:S,per_page:m,safesearch:!0,image_type:"photo",orientation:"horizontal"},g=async({searchQuery:n,currentPage:e}={})=>{const a=await u({params:{...M,q:n,page:e}}),{data:t,status:s}=a,o=Math.ceil(t.total/m),r=e>=o||o===1;return s!==200?(l({message:"Sorry, something went wrong on server.",customClass:"bg-danger"}),{hits:t.hits,isEndOfCollection:r}):t.total?(e<2&&l({message:`Hooray! We found ${t.totalHits} images.`,customClass:"bg-success"}),r?(l({message:"End of collection.",customClass:"bg-warning"}),{hits:t.hits,isEndOfCollection:r}):{hits:t.hits,isEndOfCollection:r}):(l({message:"Sorry, there are no images matching your search query. Please try again.",customClass:"bg-info"}),{hits:t.hits,isEndOfCollection:r})},d="/goit-advancedjs-hw-04/sprite.svg",h=n=>n.reduce((e,a)=>{const{webformatURL:t,webformatWidth:s,webformatHeight:o,largeImageURL:r,tags:p,likes:y,views:w,comments:v,downloads:L}=a;return e+=`<a
          class="info-card d-flex flex-column text-decoration-none"
          href="${r}"
        >
          <div class="rounded overflow-hidden flex-grow-1 shadow">
            <img
              class="info-ill"
              src="${t}"
              alt="${p}"
              width="${s}"
              heigth="${o}"
            />
          </div>
          <div class="info-list d-grid text-center">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Likes: ${y}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${d}#likes"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Views: ${w}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${d}#views"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Comments: ${v}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${d}#comment"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Downloads: ${L}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${d}#download"></use>
              </svg>
            </button>
          </div>
        </a>`},""),T=(n="[data-gallery]")=>{if(!n)return;const{height:e}=document.querySelector("[data-gallery]").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};const i={searchForm:document.forms.searchForm,container:document.querySelector("[data-gallery]"),loadMoreBtn:document.querySelector("[data-load-more]")},c={currentPage:1,searchQuery:""},f=new E("[data-gallery] a"),b=n=>{[...document.querySelectorAll(n)].map(a=>new $(a))},x=async n=>{n.preventDefault();const e=n.currentTarget;c.searchQuery=e.elements.searchInput.value.trim(),c.currentPage=1;try{i.container.innerHTML="",i.loadMoreBtn.classList.add("d-none");const{hits:a,isEndOfCollection:t}=await g(c);if(i.container.insertAdjacentHTML("beforeend",h(a)),f.refresh(),b('[data-bs-toggle="tooltip"]'),t)return;i.loadMoreBtn.classList.remove("d-none")}catch(a){console.log(a)}finally{e.reset()}},A=async n=>{try{c.currentPage+=1;const{hits:e,isEndOfCollection:a}=await g(c);i.container.insertAdjacentHTML("beforeend",h(e)),f.refresh(),b('[data-bs-toggle="tooltip"]'),T("[data-gallery]"),a&&i.loadMoreBtn.classList.add("d-none")}catch(e){console.log(e)}};i.searchForm.addEventListener("submit",x);i.loadMoreBtn.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
