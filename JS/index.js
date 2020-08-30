const link = document.querySelector('a');

link.textContent = 'Welcome to LMR';
link.href = 'https://google.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';

// [...Array(1000)].forEach( (_, i) => {
// const p = document.createElement('p');
// p.textContent = i + ' lorem ipsum...';
// sect.appendChild(p);
// })

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');

$('.click-me').click( () => $('img').toggle(3000) );

const display = document.querySelector('.display');
const btnEq = document.querySelector('.btn-eq');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed) );

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed) );

function operPressed(ev) {
    display.value += ev.target.innerText;
}

btnEq.addEventListener('click', () => display.value = eval(display.value));

// const clock = document.querySelector('.clock');
// const options = {  
//     hour: "2-digit", minute: "2-digit", second: "2-digit"
// };  
// const showClock = () => clock.innerText = (new Date()).toLocaleTimeString("uk", options);
// setInterval(showClock, 1000);
