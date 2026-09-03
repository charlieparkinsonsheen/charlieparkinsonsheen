const images = [
  "images/Still%202026-03-13%20130236_6.650.1.jpg"
];

const image = document.getElementById("random-image");

if (image && images.length > 0) {
  const randomNumber = Math.floor(Math.random() * images.length);
  image.src = images[randomNumber];
}
