document.addEventListener ('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll ('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');/*para abertura e fechamento da questão arquivo "_faq" */

    //Altura da seção hero//
    const heroSection = document.querySelector ('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        
        if (posicaoAtual < alturaHero) {
            ocultarElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })    
    
    //Seção de atrações, programação das abas//
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //Seção FAQ - abertura e fechamento das respostas//
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

//Função para ocultar elementos da header//
function ocultarElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

//Função para exibir elementos da header//
function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll ('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll ('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}