const animals = ['Cavalo', 'Elefante', 'Girafa', 'Jacare', 'Leao', 'Lobo', 'Panda', 'Pantera', 'Preguica', 'Tigre'];

function start() {
  if (!localStorage.getItem('user')) {
    let userName = prompt('Nome do jogador');
    userName ||= 'jogador 1';
    document.getElementById('name').innerHTML = userName;
    localStorage.setItem('user', userName);
    loadAnimals();
  }
  else {
    document.getElementById('name').innerHTML = localStorage.getItem('user');
    let hits = sessionStorage.getItem('acertos');
    let errors = sessionStorage.getItem('erros');

    if (!hits) {
      document.getElementById('hit').innerHTML = 0
    }
    else {
      document.getElementById('hit').innerHTML = hits;
    }
    if (!errors) {
      document.getElementById('error').innerHTML = 0;
    }
    else {
      document.getElementById('error').innerHTML = errors;
    }
  }
  random();
}

function loadAnimals() {
  for (var animal of animals)
    sessionStorage.setItem(animal, animal);

  random();
}

function random() {
  const selectedAnimal = animals[Math.floor(Math.random() * animals.length)]
  if (sessionStorage.getItem(selectedAnimal) != undefined)
    quiz(selectedAnimal);

  else
    isTheQuizComplete() ? finished() : random();
}

function quiz(animal) {
  let question;
  let answer = [];
  let images = document.getElementById('img');
  let buttons = document.getElementsByClassName('btn btn-outline-primary');

  switch (animal) {

    case 'Girafa':
      question = 'Qual a media de altura (em metros) de uma girafa adulta ?';
      answer = ['4,0 - 5,5 m', '6,0 - 7,6 m', '4,6 – 6,1 m', '5,6 - 8,1 m'];
      break;

    case 'Leao':
      question = 'Qual a força da mordida de um leão ?';
      answer = ['500 PSI', '600 PSI', '700 PSI', '650 PSI'];
      break;

    case 'Elefante':
      question = 'Qual é o peso de um elefante africano adulto ?';
      answer = ['6.000 kg', '3.000 kg', '4.000 kg', '5.000 kg'];
      break;

    case 'Tigre':
      question = 'O quão alto pula um tigre ?';
      answer = ['5 - 8 m', '4 - 7 m', '5 - 6 m', '3 - 5 m'];
      break;

    case 'Lobo':
      question = 'Como se chama um conjunto de lobos ?';
      answer = ['Matilha', 'Bando', 'Familia', 'Alcateia'];
      break;

    case 'Cavalo':
      question = 'O que não consiste na dieta de um cavalo ?';
      answer = ['Feno e palha', 'Frango e peixe', 'Apenas Feno', 'Apenas Frutas'];
      break;

    case 'Jacare':
      question = 'Quantos dentes contém um Jacaré adulto ?';
      answer = ['80 dentes', '5 dentes', '124 dentes', '68 dentes'];
      break;

    case 'Panda':
      question = 'Qual a altura de um panda-gigante ?';
      answer = ['1,5 m - 2,0', '90 cm - 1,5 m', '60 cm - 90 cm', '80 cm - 1,2 m'];
      break;

    case 'Preguica':
      question = 'Qual a velocidade máxima atingida por uma preguiça ?';
      answer = ['90 m/h', '120 m/h', '10 m/h', '30 m/h'];
      break;

    case 'Pantera':
      question = 'Onde se concentra a maior parte das panteras negras mundo';
      answer = ['África', 'América', 'Oceânia', 'Europa'];
      break;

    default:
      alert('Erro interno, por favor tente novamente mais tarde');
      break;
  }


  images.setAttribute('alt', animal);
  images.setAttribute('src', 'src/img/' + animal + '.jpg');
  document.getElementsByClassName('card-text')[0].innerHTML = question;

  for (let id = 0; id < buttons.length; id++) {

    if (buttons[id].text == '' || buttons[id].text == undefined) {

      for (let id = 0; id < answer.length; id++) {

        if (answer[id].indexOf(buttons[id])) {
          buttons[id].innerHTML = answer[id];
          buttons[id].value = answer[id];
        }
        else
          continue;
      }
    }
  }

}

function finished() {
  let name = localStorage.getItem('user');
  let hits = sessionStorage.getItem('acertos');
  let error = sessionStorage.getItem('erros');


  if (error == null) {
    error = 0
  }
  alert(`Muito bem ${name} você conseguiu terminar 
         Número de acertos ${hits}.
         Número de erros ${error}.
         Resultado ${10 - error}/10`);

  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
}

window.addEventListener('load', start);