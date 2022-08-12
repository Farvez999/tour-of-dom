// 1. Whare to add
const placesList = document.getElementById('places-list');

// 2. What to do added
const li = document.createElement('li');
li.innerText = 'New li added';

// 3. Add the child
placesList.appendChild(li);

///
const mainContant = document.getElementById('main-contant')

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriany';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Lacchi';
ul.appendChild(li3);

section.appendChild(ul);

mainContant.appendChild(section);

// Set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Shirt</li>
    <li>Pant</li>
</ul>
`
mainContant.appendChild(sectionDress);

