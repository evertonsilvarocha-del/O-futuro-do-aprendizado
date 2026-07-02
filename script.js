// Adiciona uma interação simples ao botão "Ler mais"
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-leia-mais');

    botao.addEventListener('click', () => {
        alert('Acessando o artigo completo sobre Tecnologia na Educação!');
    });
});
