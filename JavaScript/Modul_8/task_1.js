`use strict`;
import items from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  image: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
};

const createGallery = items =>
  items.reduce(
    (acc, item, idx) =>
      (acc += `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" data-index="${idx}" alt="${item.description}"/></a></li>`),
    '',
  );

refs.gallery.insertAdjacentHTML('beforeend', createGallery(items));

const onClickOpenHandler = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  refs.image.src = e.target.dataset.source;
  refs.image.alt = e.target.alt;
  refs.lightbox.classList.add('is-open');
};

const closeModal = () => {
  if (refs.lightbox.classList.contains('is-open')) {
    refs.image.src = '';
    refs.image.alt = '';
    refs.lightbox.classList.remove('is-open');
  }
};

const onClickCloseHandler = e => {
  if (e.currentTarget === refs.overlay && e.target.nodeName !== 'IMG') {
    closeModal();
  }
};

refs.gallery.addEventListener('click', onClickOpenHandler);
refs.overlay.addEventListener('click', onClickCloseHandler);

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
