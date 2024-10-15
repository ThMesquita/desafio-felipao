let heroi = ['', 0];
let nivel;

function verificar() {
  heroi[0] = document.querySelector('#heroi').value;
  heroi[1] = document.querySelector('#nivel').value;

  if (heroi[1] <= 1000) {
    nivel = 'Ferro⚪';
  } else if (heroi[1] <= 2000) {
    nivel = 'Bronze🟤';
  } else if (heroi[1] <= 5000) {
    nivel = 'Prata🔘';
  } else if (heroi[1] <= 7000) {
    nivel = 'Ouro🟡';
  } else if (heroi[1] <= 8000) {
    nivel = 'Platina🔵';
  } else if (heroi[1] <= 9000) {
    nivel = 'Ascendente🟢';
  } else if (heroi[1] <= 10000) {
    nivel = 'Imortal🔴';
  } else {
    nivel = 'Radiante🔶';
  }

  document.querySelector(
    'section',
  ).innerHTML = `<h1>O Herói de nome <strong>${heroi[0]}</strong> está no nível de <strong>${nivel}</strong></h1>`;

  document.querySelector('#botao').style.display = 'block';
}
