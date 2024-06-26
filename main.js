// Function to toggle the visibility of the all-photos section
function toggleAllPhotos() {
    const allPhotosDiv = document.getElementById('all-photos');
    if (allPhotosDiv.classList.contains('hidden')) {
        allPhotosDiv.classList.remove('hidden');
    } else {
        allPhotosDiv.classList.add('hidden');
    }
}
let btn = document.querySelector('#letter');
let sd = document.querySelector('#sd');
let letter = document.querySelector('.love-text-section');

// Set the initial display and transition properties
letter.style.display = 'none';
letter.style.transition = '1s ease-in';

btn.onclick = function() {
    if (letter.style.display === 'none') {
        letter.style.display = 'block';
        sd.style.display = 'block';
    } else {
        letter.style.display = 'none';
        sd.style.display = 'none';
    }
}