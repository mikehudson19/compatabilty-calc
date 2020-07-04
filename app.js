const calculateBtn = document.getElementById('calculate');
const modaloAgainBtn = document.getElementById('calcAgain');
const modaloNewBtn = document.getElementById('calcNew');


calculateBtn.addEventListener('click', triggerModalo);

function triggerModalo() {
  // ADD A SPINNER TO INDICATE THAT IT IS LOADING 
  calculateMatch();
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'block';
}

modaloAgainBtn.addEventListener('click', triggerModalo);

modaloNewBtn.addEventListener('click', closeModalo);

function closeModalo() {
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'none';
}



function calculateMatch() {
  const name1 = document.querySelector('#name1');
  const name2 = document.querySelector('#name2');
  const scoreInput = document.querySelector('.comp-score');
  const messageInput = document.querySelector('.comp-message');
  const array1 = ['This will go great', 'This will be amazing']

  const score = Math.floor((Math.random() + 0.5) * (Math.random() + 70));

  
  
  if ((name1.value === 'Rivon' || name1.value === 'Michael') && (name2.value === 'Rivon' || name2.value === 'Michael')) {
    scoreInput.innerText = `${score}%`;
    messageInput.innerText = 'message';

  } else if (name1.value == 'Rivon' || name2.value == 'Rivon') {
    scoreInput.innerText = '17%';
    messageInput.innerText = 'This is not working';
    
  }
  
}