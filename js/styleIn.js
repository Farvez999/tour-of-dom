const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.margin = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '5px';
    section.style.background = 'gray';

}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.background = 'yellow' 
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');