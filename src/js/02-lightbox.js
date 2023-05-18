import { galleryItems } from "./gallery-items.js";
// Change code below this line
const allGallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");
allGallery.innerHTML = galleryList;
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(lightbox);
