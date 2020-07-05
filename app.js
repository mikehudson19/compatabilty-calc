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
  const array1 = ['This will go great', 'This will be amazing', 'This will be the best thing ever']
  const array2 = ['This is an okay match', 'Not the best, go for Michael instead', 'Bad Match']

  const score = Math.floor((Math.random() * 15) + 85);
  const score2 = Math.floor((Math.random() * 10) + 35);
  const score3 = Math.floor((Math.random() * 100));

  

  
  if ((name1.value === 'Rivon' || name1.value === 'Michael') && (name2.value === 'Rivon' || name2.value === 'Michael')) {
    scoreInput.innerText = `${score}%`;
    messageInput.innerText = array1[Math.floor(Math.random() * 3)];

  } else if (name1.value == 'Rivon' || name2.value == 'Rivon') {
    scoreInput.innerText = `${score2}%`;
    messageInput.innerText = array2[Math.floor(Math.random() * 3)];
  } else {
    scoreInput.innerText = `${score3}%`
    if (score3 > 80) {
      
      messageInput.innerText = 'Great match'
    } else if (score3 < 80 && score3 > 50) {
      messageInput.innerText = 'Average match'

    } else {
      messageInput.innerText = 'Bad match'
    }
  }
  
}