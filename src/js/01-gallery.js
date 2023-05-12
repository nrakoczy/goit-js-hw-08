
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryEL = document.querySelector(".gallery");

const galleryView = galleryItems
	.map((item) => {
		return `<li>
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" 
    />
  </a></li>`;
	})
	.join("");

galleryEL.insertAdjacentHTML("beforeend", galleryView);

const imageFromLightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 350,
	showCounter: true,
	scrollbarWidth: 20,
});
