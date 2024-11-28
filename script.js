const images = document.querySelectorAll('.media img');
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const fullscreenImage = document.getElementById('fullscreen-image');

images.forEach(image => {
  image.addEventListener('click', () => {
    fullscreenImage.src = image.src;
    fullscreenViewer.classList.remove('hidden');
  });
});

fullscreenViewer.addEventListener('click', () => {
  fullscreenViewer.classList.add('hidden');
  fullscreenImage.src = '';
});