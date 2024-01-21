//JOGO DE ADVINHAÇÃO
alert('Bem vindo ao jogo de advinhação do numero secreto');
let numeroScreto =6;
let chute;
let chances;
let nome;
tentativas();

while (chute != numeroScreto && chances > 0) {

    chute = prompt(`${nome}, Digite um numero de 1 a 50 \nNumero de chances: ${chances}`);
    if(chute == numeroScreto){
        alert(`Acertou, numero secreto: ${numeroScreto}`);
    }else {
        chances--;
        if (chute > numeroScreto ) {
            alert(`Errou, tente novamente! \nDica: Número secreto Menor que ${chute}`);
        }else{
            alert(`Errou, tente novamente!\nDica: Número secreto Maior que ${chute}`);
        }   
    }
    if (chances == 0) {
        alert(`Sem tentativas!`);
        tentativas();
 
    }
}

function tentativas(){ 
    do {
        nome = prompt('digite o nome do jogador');
        chances = prompt(`${nome}, digite a quantidade de chances MAIOR que 2 e MENOR que 5`);;
    } while (chances > 5 || chances < 2);
}


// DESAFIO: HORA DA PRATICA



