// Declarações de variáveis e funções principais
var img = document.getElementById('img');

document.getElementById('dica').addEventListener('click', tip);

// FUNÇÕES PRINCIPAIS DO SISTEMA
    
    function start() {
        if (!localStorage.getItem('user')) {
            let userName = prompt('Nome do jogador');
                userName ||= 'jogador 1';
                document.getElementById('name').innerHTML = userName;
                localStorage.setItem('user',userName);
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
 
    function random() {
             
        if (sessionStorage.getItem('Tigre') != undefined) {
            quiz('Tigre');
        }
                
        else if (sessionStorage.getItem('Cavalo') != undefined) {
            quiz('Cavalo');
        }
                
        else if (sessionStorage.getItem('Panda') != undefined) {
            quiz('Panda');
        }
                
        else if (sessionStorage.getItem('Elefante') != undefined) {
            quiz('Elefante');
        }
                
        else if (sessionStorage.getItem('Girafa') != undefined) {
            quiz('Girafa');
        }
                
        else if (sessionStorage.getItem('Jacare') != undefined) {
            quiz('Jacare');
        }
                
        else if (sessionStorage.getItem('Lobo') != undefined) {
            quiz('Lobo');
        }

        else if (sessionStorage.getItem('Leao') != undefined) {
            quiz('Leao');
        }
                
        else if (sessionStorage.getItem('Pantera') != undefined) {
                quiz('Pantera');
        }
                
        else if (sessionStorage.getItem('Preguica') != undefined) {
            quiz('Preguica');
        }
        else {
            result = confirm('Deseja jogar novamente ?');
            if (result) {
                    localStorage.clear();
                    sessionStorage.clear();
                    window.location.reload();
            }
            else {
                let hit = sessionStorage.getItem('acertos');
                let error = sessionStorage.getItem('erros');
                let name =  localStorage.getItem('user');
                if (error == null) {
                    error = 0
                }
                alert(`Muito bem ${name} você conseguiu terminar 
                    \n Número de acertos ${hit}.
                    \n Número de erros ${error}.
                    \n Resultado ${hit - error}/10`);

                    localStorage.clear();
                    sessionStorage.clear();
                    window.location.reload();
                }    
        }
    }
    
    function loadAnimals() {
        let animals = ['Cavalo', 'Elefante', 'Girafa', 'Jacare', 'Leao', 'Lobo', 'Panda', 'Pantera', 'Preguica', 'Tigre'];
            for (var animal of animals) {
                sessionStorage.setItem(animal,animal);
            }
            random();
    }
    
    function quiz(animal) {
    
        switch (animal) {
            
            case 'Girafa':
    
                img.setAttribute('alt', 'Girafa');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Qual a media de altura (em metros) de uma girafa adulta ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
    
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['4,0 - 5,5 m', '6,0 - 7,6 m', '4,6 – 6,1 m', '5,6 - 8,1 m'];
                        for (let id = 0; id < answer.length; id++) {
    
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
                
            break;
    
            case 'Leao':
                img.setAttribute('alt', 'Leao');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Qual a força da mordida de um leão ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = [ '500 PSI', '600 PSI', '700 PSI', '650 PSI'];
                        for (let id = 0; id < answer.length; id++) {
    
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Elefante':
    
                img.setAttribute('alt', 'Elefante');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Qual é o peso de um elefante africano adulto ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['6.000 kg', '3.000 kg', '4.000 kg', '5.000 kg'];
                        for (let id = 0; id < answer.length; id++) {
    
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Tigre':
    
                img.setAttribute('alt', 'Tigre');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'O quão alto pula um tigre ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['5 - 8 m', '4 - 7 m', '5 - 6 m', '3 - 5 m'];
                        for (let id = 0; id < answer.length; id++) {
    
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Lobo':
                img.setAttribute('alt', 'Lobo');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Como se chama um conjunto de lobos ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['Matilha', 'Bando', 'Familia', 'Alcateia'];
                        for (let id = 0; id < answer.length; id++) {
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Cavalo':
                img.setAttribute('alt', 'Cavalo');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'O que não consiste na dieta de um cavalo ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['Feno e palha', 'Frango e peixe', 'Apenas Feno', 'Apenas Frutas'];
                        for (let id = 0; id < answer.length; id++) {
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Jacare':
                img.setAttribute('alt', 'Jacare');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Quantos dentes contém um Jacaré adulto ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['80 dentes', '5 dentes', '124 dentes', '68 dentes'];
                        for (let id = 0; id < answer.length; id++) {
    
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            } if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                            }
                        }
                    }
                }
            break;
    
            case 'Panda':
                img.setAttribute('alt', 'Panda');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Qual a altura de um panda-gigante ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['1,5 m - 2,0', '90 cm - 1,5 m', '60 cm - 90 cm', '80 cm - 1,2 m'];
                        for (let id = 0; id < answer.length; id++) {
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Preguica':
                img.setAttribute('alt', 'Preguica');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Qual a velocidade máxima atingida por uma preguiça ?';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['90 m/h', '120 m/h', '10 m/h', '30 m/h'];
                        for (let id = 0; id < answer.length; id++) {
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue;
                        }
                    }
                }
            break;
    
            case 'Pantera':
                img.setAttribute('alt', 'Pantera');
                img.setAttribute('src', 'src/img/' + animal + '.jpg');
                document.getElementsByClassName('card-text')[0].innerHTML = 'Onde se concentra a maior parte das panteras negras mundo';
                question = document.getElementsByClassName('btn btn-outline-primary');
                for (let id = 0; id < question.length; id++) {
                    if (question[id].text == '' || question[id].text == undefined) {
                        answer = ['África', 'América', 'Oceânia', 'Europa'];
                        for (let id = 0; id < answer.length; id++) {
                            if (answer[id].indexOf(question[id])) {
                                question[id].innerHTML = answer[id];
                                question[id].value = answer[id];
                            }
                            else
                                continue
                        }
                    }
                }
            break;
    
            default:
                alert('Falha no software, por favor reportar ao Desenvolvedor !');
            break;
        }
        
    }
    
    function tip() {
        let tip = img.alt;
        switch (tip) {
    
            case 'Cavalo':
                confirm('Os cavalos não se alimentam apenas de feno');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Girafa':
                confirm('As Girrafas não chegam a medir mais de 7 metros');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Jacare':
                confirm('Os Jacarés contém menos de 100 dentes');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Elefante':
                confirm('Os Elefantes pesa mais de 3.000 kg');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Preguica':
                confirm('As preguiças correm mais de 10 K/H');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Pantera':
                confirm('Não há panteras na América');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Leao':
                confirm('Os Leôes tem mais de 500 PSI de força em suas mandibulas');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Lobo':
                confirm('Familia não é o termo adequado correto para se referir a um conjunto de lobos');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Panda':
                confirm("O termo 'gigante' não é muito no sentido literário");
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            case 'Tigre':
                confirm('Os Tigres tem pulos que ultrapassam os cinco metros');
                document.getElementById('dica').setAttribute('disabled', 'disabled')
                break;
    
            default:
                alert('Falha no software, por favor reportar ao Desenvolvedor !')
                break;
        }
    }
    
    // FUNÇÕES ANÔNIMAS
    
    document.getElementById('resZero').addEventListener('click', () => {
        let animal = img.alt;
        let res = document.getElementById('resZero').value;
            select(animal,res)
    });
    
    document.getElementById('resOne').addEventListener('click', () => {
        let animal = img.alt;
        let res = document.getElementById('resOne').value;
            select(animal,res);
    });
    
    document.getElementById('resTwo').addEventListener('click', () => {
        let animal = img.alt;
        let res = document.getElementById('resTwo').value;
            select(animal,res);
    });
    
    document.getElementById('resThree').addEventListener('click', () => {
        let animal = img.alt;
        let res = document.getElementById('resThree').value;
            select(animal,res);
    });
    
    function select(animal,res) {
        let hit = sessionStorage.getItem('acertos'); 
        let error = sessionStorage.getItem('erros')   
        let hits = parseInt(hit);
        let errors = parseInt(error);

        switch (animal) {
    
            case 'Cavalo':
                if (res == 'Frango e peixe') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);               
                    }      
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Girafa':
                if (res == '4,6 – 6,1 m') {
                    if (!hits){ 
                        sessionStorage.setItem('acertos',1);
                    }           
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Leao':
                if (res == '600 PSI') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }          
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Elefante':
                if (res == '6.000 kg') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }                     
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Tigre':
                if (res == '5 - 6 m') {
                    if (!hits){
                        sessionStorage.setItem('acertos',1);
                        sessionStorage.removeItem(animal);
                    } 
                                                 
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Lobo':
                if (res == 'Alcateia') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }     
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                   
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                
                window.location.reload();
                break;
    
            case 'Jacare':
                if (res == '80 dentes') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }     
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Panda':
                if (res == '90 cm - 1,5 m') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }
                            
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Preguica':
                if (res == '120 m/h') {
                    if (!hits) { 
                        sessionStorage.setItem('acertos',1);
                    }        
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            case 'Pantera':
                if (res == 'Oceânia') {
                    if (!hits) {
                        sessionStorage.setItem('acertos',1);
                    }                   
                    else {
                        hits += 1;
                        sessionStorage.setItem('acertos',hits);
                        sessionStorage.removeItem(animal);
                    }
                    window.location.reload();
                }
                else {
                    if (!errors) {
                        sessionStorage.setItem('erros',1);
                        sessionStorage.removeItem(animal);
                    }
                    else {
                        errors += 1;
                        sessionStorage.setItem('erros',errors);
                        sessionStorage.removeItem(animal);
                    }
                }
                window.location.reload();
                break;
    
            default:
                alert('Falha no software, por favor reportar ao Desenvolvedor !')
                break;
        }
    }

window.addEventListener('load', start);