//JOGO DE ADVINHAÇÃO
alert('Bem vindo ao jogo de advinhação do numero secreto');
let numeroMaximo = 100;
let numeroScreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
let nome;
console.log(numeroScreto);
nome = prompt('Digite seu nome');
while (chute != numeroScreto ) {
    chute = prompt(`${nome}, Digite um numero de 1 a ${numeroMaximo} \nTentativa: ${tentativas}`);
    if(chute == numeroScreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Acertou!!! Numero secreto ${numeroScreto} com ${tentativas} ${palavraTentativa}`);
    }else {    
        chute > numeroScreto ? alert(`Errou, tente novamente! \nDica: Número secreto MENOR que ${chute}`): 
        alert(`Errou, tente novamente!\nDica: Número secreto MAIOR que ${chute}`);  
    }
    tentativas++;
}






