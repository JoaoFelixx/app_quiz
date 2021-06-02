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

    if (!hits)
      document.getElementById('hit').innerHTML = 0;

    else
      document.getElementById('hit').innerHTML = hits;

    if (!errors)
      document.getElementById('error').innerHTML = 0;

    else
      document.getElementById('error').innerHTML = errors;
  }

  random();
}

function loadAnimals() {
  for (const animal of animals)
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

function isTheQuizComplete() {
  let numberOfAniumals = 10;
  let loop = 0;
  for (const animal of animals) {
    if(sessionStorage.getItem(animal) == undefined) 
      loop ++;
  }
  if (loop == numberOfAniumals)
    return true;
  else
    return false;

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

document.getElementById('resZero').onclick = () => {
  let animal = img.alt;
  let res = document.getElementById('resZero').value;
  select(animal, res)
};

document.getElementById('resOne').onclick = () => {
  let animal = img.alt;
  let res = document.getElementById('resOne').value;
  select(animal, res);
};

document.getElementById('resTwo').onclick = () => {
  let animal = img.alt;
  let res = document.getElementById('resTwo').value;
  select(animal, res);
};

document.getElementById('resThree').onclick = () => {
  let animal = img.alt;
  let res = document.getElementById('resThree').value;
  select(animal, res);
};

function tip() {
  let tip = img.alt;
  let message;

  switch (tip) {

    case 'Cavalo':
      message = 'Os cavalos não se alimentam apenas de feno';
      break;

    case 'Girafa':
      message = 'As Girrafas não chegam a medir mais de 7 metros';
      break;

    case 'Jacare':
      message = 'Os Jacarés contém menos de 100 dentes'
      break;

    case 'Elefante':
      message = 'Os Elefantes pesam mais de 3.000 kg';
      break;

    case 'Preguica':
      message = 'As preguiças correm mais de 10 K/H';
      break;

    case 'Pantera':
      message = 'Não há panteras na América';
      break;

    case 'Leao':
      message = 'Os Leôes tem mais de 500 PSI de força em suas mandibulas';
      break;

    case 'Lobo':
      message = 'Familia não é o termo adequado correto para se referir a um conjunto de lobos';
      break;

    case 'Panda':
      message = "O termo 'gigante' não é muito no sentido literário";
      break;

    case 'Tigre':
      message = 'Os Tigres tem pulos que ultrapassam os cinco metros';
      break;

    default:
      message = 'Falha no software, por favor reportar ao Desenvolvedor !';
      break;
  }

  confirm(message);
  document.getElementById('dica').setAttribute('disabled', 'disabled')
}

function select(animal, res) {
  let hits   = parseInt(sessionStorage.getItem('acertos'));
  let errors = parseInt(sessionStorage.getItem('erros'));

  switch (animal) {

    case 'Cavalo':

      if (res == 'Frango e peixe') 
        scoreCard(hits, animal)
      else 
        losePoints(errors, animal)
      break;

    case 'Girafa':

      if (res == '4,6 – 6,1 m')
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Leao':

      if (res == '600 PSI')
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Elefante':

      if (res == '6.000 kg') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Tigre':

      if (res == '5 - 6 m') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Lobo':

      if (res == 'Alcateia')
          scoreCard(hits, animal)
        else
          losePoints(errors, animal)
      break;

    case 'Jacare':

      if (res == '80 dentes') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Panda':

      if (res == '90 cm - 1,5 m') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Preguica':

      if (res == '120 m/h') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    case 'Pantera':

      if (res == 'Oceânia') 
        scoreCard(hits, animal)
      else
        losePoints(errors, animal)
      break;

    default:
      alert('Falha no software, por favor reportar ao Desenvolvedor !')
      break;
  }
}

function scoreCard(hits, animal) {
  if (!hits)
    sessionStorage.setItem('acertos', 1);

  else 
    sessionStorage.setItem('acertos', hits += 1);
   
  sessionStorage.removeItem(animal);
  window.location.reload();
}

function losePoints(errors, animal) {
  if (!errors) {
    sessionStorage.setItem('erros', 1);
    sessionStorage.removeItem(animal);
  }
  else 
    sessionStorage.setItem('erros', errors += 1);
   
  sessionStorage.removeItem(animal);
  window.location.reload();
}

function finished() {

  let error = sessionStorage.getItem('erros');


  if (error == null) {
    error = 0
  }
  alert(`Muito bem ${localStorage.getItem('user')} você conseguiu terminar 
         Número de acertos ${sessionStorage.getItem('acertos')}.
         Número de erros ${error}.
         Resultado ${10 - error}/10`);

  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
}

window.onload = start;