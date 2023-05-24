import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const allGallery = document.querySelector('.gallery');
const galleryList = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

allGallery.innerHTML = galleryList;

allGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return console.log('not img');
  }
  const eventSource = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
    <img src="${eventSource}" width="800" height="600">
`);
  instance.show();

  allGallery.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
});
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
// console.log(lightbox);
