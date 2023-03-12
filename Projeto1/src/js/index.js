/*
    OBJETIVO:
        quando clicarmos no botão temos que mostrar a imagem de fundo conrrespondente

        -passo1: dar um jeito de pegar o elemento HTML dos botões
        -passo2: dar um jeito de identificar o clique do usuário no botão
        -passo3: desmarcar o botão selecionado anterior
        -passo4: marcar o botão clicado como se estivesse selecionada
        -passo5: esconder a imagem ativa de fundo
        -passo6: fazer aparecer a imagem correspondente ao botão clicado
*/


//passo 1 - dar um jeito de pegar o elemento HTML dos botões 
const botaoCarrosel= document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuário no botão
/*const botao1 = document.querySelector('#botao1');
botao1.addEventListener('click', () => {
    console.log('Clicou no botao 1');
})
*/
botaoCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão clicado como se estivesse selecionada
        selecionarBotao(botao);

        //passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemAtiva(indice);
    });
})










//--FUNCOES
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}