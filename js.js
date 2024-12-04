const photos = [
    'amor1.jpg', 'amor2.jpg', 'amor3.jpg', 'amor4.jpg', 'amor5.jpg', 'amor6.jpg',
    'viajes1.jpg', 'viajes2.jpg', 'viajes3.jpg', 'viajes4.jpg','viajes5.jpg','viajes6.jpg','viajes7.jpg'
    ,'viajes8.jpg','viajes9.jpg','amigos.jpg','explicame-esto.jpg','explicame-esto2.jpg','explicame-esto3.jpg',
];

const titles = [
    'El amor de mi vida',
    'Viajecillos',
    'Primeros tiempos','Explicame esto'
];

const photosPerPage = [6, 9, 1,3]; // Número de fotos en cada página

let currentPage = 0;
const photoGrid = document.getElementById('photo-grid');
const pageIndicator = document.getElementById('page-indicator');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const titleElement = document.createElement('h2');

// Agrega título dinámico al contenedor principal
document.querySelector('.album-container').insertBefore(titleElement, photoGrid);

function updateAlbum() {
    photoGrid.innerHTML = '';
    titleElement.textContent = titles[currentPage];
    
    const start = photosPerPage.slice(0, currentPage).reduce((a, b) => a + b, 0);
    const end = start + photosPerPage[currentPage];
    const currentPhotos = photos.slice(start, end);

    currentPhotos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Foto';
        photoGrid.appendChild(img);
    });

    pageIndicator.textContent = `${currentPage + 1} / ${photosPerPage.length}`;
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === photosPerPage.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateAlbum();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < photosPerPage.length - 1) {
        currentPage++;
        updateAlbum();
    }
});

// Carga inicial
updateAlbum();