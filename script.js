// your javascript file
const container = document.querySelector('#container');

const pContent = document.createElement('p');
pContent.textContent = 'Hey I’m red!';
pContent.style.color = 'red';

const h3Content = document.createElement('h3');
h3Content.textContent = 'I’m a blue h3!'
h3Content.style.color = 'blue';

const divContent = document.createElement('div');
divContent.classList.add('divContent');
divContent.style.border = "thick solid #000000";
const h3Content2 = document.createElement('h3');
h3Content2.textContent = 'I’m Inside a Div!'
h3Content2.style.color = 'Black';
const pContent2 = document.createElement('p');
pContent2.textContent = 'ME TOO';
pContent2.style.color = 'Black';


divContent.appendChild(h3Content2);
divContent.appendChild(pContent2); 
container.appendChild(pContent);
container.appendChild(h3Content);
container.appendChild(divContent);

//Button Stuff
  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert("Congrats you have clicked " + button.id);
  });
});