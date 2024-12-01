const filter = document.getElementById('filter');
filter.addEventListener('change', (event) => {
    const filterValue = event.target.value;
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    const photos = {
        all: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
        concerts: ['concert1.jpg', 'concert2.jpg'],
        weddings: ['wedding1.jpg', 'wedding2.jpg']
    };
    const filteredPhotos = photos[filterValue] || photos.all;
    filteredPhotos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        gallery.appendChild(img);
    });
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
});
function toggleInfo(memberElement) {
    const bio = memberElement.querySelector('.bio');
    if (bio.style.display === 'none') {
        bio.style.display = 'block';
        bio.style.opacity = 0;
        setTimeout(() => (bio.style.opacity = 1), 50);
    } else {
        bio.style.opacity = 0;
        setTimeout(() => (bio.style.display = 'none'), 300);
    }
}