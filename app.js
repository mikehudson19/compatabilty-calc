const calculateBtn = document.getElementById('calculate');
const modaloAgainBtn = document.getElementById('calcAgain');
const modaloNewBtn = document.getElementById('calcNew');


calculateBtn.addEventListener('click', triggerModalo);

function triggerModalo() {
  // ADD A SPINNER TO INDICATE THAT IT IS LOADING 
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'block';
}

modaloAgainBtn.addEventListener('click', triggerModalo);

modaloNewBtn.addEventListener('click', closeModalo);

function closeModalo() {
  const modalo = document.querySelector('.modalo-container');
  modalo.style.display = 'none';
}