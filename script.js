const images = [
  "images/Still 2026-02-21 163747_6.6.1.jpg"
];

const image = document.getElementById("random-image");

if (image && images.length > 0) {
  const randomNumber = Math.floor(Math.random() * images.length);
  image.src = images[randomNumber];
}
