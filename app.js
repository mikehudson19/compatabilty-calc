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
  }, 2800)
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
  const array1 = ['You two go together like rice cakes and peanut butter (plus syrup, banana and cinnamon).', 'The universe (and Bumble) brought you two together for a reason.', 'She is the strawberry to his chocolate.', 'Soulmates don\'t exist, but if they did, you two can stop looking.', 'He\'s the Harry to her Ginny, the Ron to her Hermione.', 'They\'re both Virgo Hufflepuffs? Enough said.']
  const array2 = ['This is an okay match. He\'s probably not a Hufflepuff though.', 'Not the best match, maybe she should give that Michael guy a shot instead?.', 'They go together like Dumbledore and Neville Longbottom. Keep looking.', 'He would be lucky to have her. She can do better though.']

  const score = Math.floor((Math.random() * 10) + 90);
  const score2 = Math.floor((Math.random() * 10) + 35);
  const score3 = Math.floor((Math.random() * 100));

  const title = document.querySelector('.modalo-title');
  
  if ((name1.value.toLowerCase() === 'rivon pretorius' || name1.value.toLowerCase() === 'michael hudson') && (name2.value.toLowerCase() === 'rivon pretorius' || name2.value.toLowerCase() === 'michael hudson')) {
    scoreInput.innerText = `${score}%`;
    messageInput.innerText = array1[Math.floor(Math.random() * 6)];
    console.log(Math.floor(Math.random() * 6))

  } else if (name1.value.toLowerCase() == 'rivon pretorius' || name2.value.toLowerCase() == 'rivon pretorius') {
    scoreInput.innerText = `${score2}%`;
    messageInput.innerText = array2[Math.floor(Math.random() * 4)];
  } else {
    scoreInput.innerText = `${score3}%`
    if (score3 > 80) {
      
      messageInput.innerText = 'Great match.'
    } else if (score3 < 80 && score3 > 50) {
      messageInput.innerText = 'Average match.'

    } else {
      messageInput.innerText = 'Bad match.'
    }
  }
  
}