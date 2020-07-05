const calculateBtn = document.getElementById('calculate');
const modaloAgainBtn = document.getElementById('calcAgain');
const modaloNewBtn = document.getElementById('calcNew');



calculateBtn.addEventListener('click', triggerModalo);
modaloAgainBtn.addEventListener('click', triggerModalo);
modaloNewBtn.addEventListener('click', closeModalo);


function triggerModalo() {
  const loader = document.querySelector('.loader');
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'none';
  loader.style.display = 'flex';
  calculateMatch();
  setTimeout(() => {
    loader.style.display = 'none';
    modalo.style.display = 'flex';
  }, 3500)
}

function closeModalo() {
  const name1 = document.querySelector('#name1');
  const name2 = document.querySelector('#name2');
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'none';
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
  name1.value = '';
  name2.value = '';
}

function calculateMatch() {
  const name1 = document.querySelector('#name1');
  const name2 = document.querySelector('#name2');
  const scoreInput = document.querySelector('.comp-score');
  const messageInput = document.querySelector('.comp-message');
  const array1 = ['You two go together like rice cakes and peanut butter (plus syrup, banana and cinnamon).', 'The universe brought you two together for a reason.', 'She is the strawberry to his chocolate.', 'Soulmates don\'t exist, but if they did, you two can stop looking.']
  const array2 = ['This is an okay match', 'Not the best, go for Michael instead', 'Bad Match']

  const score = Math.floor((Math.random() * 15) + 85);
  const score2 = Math.floor((Math.random() * 10) + 35);
  const score3 = Math.floor((Math.random() * 100));

  const title = document.querySelector('.modalo-title');
  title.innerText = `The compatability score for ${name1.value} and ${name2.value} is:`
  
  if ((name1.value === 'Rivon Pretorius' || name1.value === 'Michael Hudson') && (name2.value === 'Rivon Pretorius' || name2.value === 'Michael Hudson')) {
    scoreInput.innerText = `${score}%`;
    messageInput.innerText = array1[Math.floor(Math.random() * 3)];

  } else if (name1.value == 'Rivon Pretorius' || name2.value == 'Rivon Pretorius') {
    scoreInput.innerText = `${score2}%`;
    messageInput.innerText = array2[Math.floor(Math.random() * 3)];
  } else {
    scoreInput.innerText = `${score3}%`
    if (score3 > 80) {
      
      messageInput.innerText = 'Great match'
    } else if (score3 < 80 && score3 > 50) {
      messageInput.innerText = 'Average match.'

    } else {
      messageInput.innerText = 'Bad match.'
    }
  }
  
}