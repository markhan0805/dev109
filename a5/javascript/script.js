const images = [
    { src: 'https://i.pinimg.com/736x/00/c7/f6/00c7f69388cf29237599b67e589fbd2d.jpg', description: 'A river and lots of trees and grass' },
    { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', description: 'A lake and mountains' },
    { src: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=', description: 'Trees and sunlight' },
    { src: 'https://d2rqvd0kuag1qx.cloudfront.net/_1280xAUTO_crop_center-center_none/092717_NatureMuseum-473_2024-03-28-194159_jaul.jpg', description: 'A butterfly on flowers' },
    { src: 'https://img.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_181624-53574.jpg', description: 'Trees of different colors' }
];

let currentIndex = 0;
let interval;
const imgElement = document.getElementById('slideshow-image');
const descriptionElement = document.getElementById('image-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
    imgElement.src = images[index].src;
    descriptionElement.textContent = images[index].description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 3000);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
interval = setInterval(nextImage, 3000);
showImage(currentIndex);
