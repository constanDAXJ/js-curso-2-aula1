let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;
console.log (numeroSecreto);
 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'insira um número de 1 a 10');
 
function validarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}`
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('imagem', 'img,bg.png')
 
    }
    else if (chute < numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    else{
        exibirTextoNaTela ('p', 'O número secreto é menor');
    }
    tentativa++;
    limparCampo()
 
}
 
 
function gerarNumeroSecreto(){
    return parseInt(Math.random () * 10+1);
}
 
function limparCampo(){
    chute = document.querySelector ('input');
    chute.value = "";
 
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 1;
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'insira um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disable', true);
}
function alterarImagem(objetivo, caminhoImagem){
    document.getElementById(Objeto).src = caminhoImagem
}