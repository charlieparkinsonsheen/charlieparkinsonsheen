const images = [
  "lens_flare.jpg"
];

const image = document.getElementById("random-image");

if (image && images.length > 0) {
  const randomNumber = Math.floor(Math.random() * images.length);
  image.src = images[randomNumber];
}
