document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-questions]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const posiçãoAT = window.scrollY;

        if(window.scrollY < alturaHero){
            ocultaelement();
        }else{
            exibeelement();
        }
    })

    //sessão de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaalvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaalvo}]`);
            escondeTodasAsListas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__buttons--is-active');

        })
    }

    //Sessão de FAQ, abrir e fechar perguntas
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abrefechaResposta);
    }
})

function ocultaelement(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeelement(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abrefechaResposta(elemento){
    const classe = 'faq__questions__list--is-open';
    const elementopai = elemento.target.parentNode;
    
    elementopai.classList.toggle(classe);
}

function removeBotaoAtivo(){
    const botoes = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < botoes.length; i++){
        botoes[i].classList.remove('shows__tabs__buttons--is-active');
    }
}

function escondeTodasAsListas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}