// Alterna o modo preto e branco ao clicar no botão
document.getElementById('preto-e-branco').addEventListener('click', function() {
    document.body.classList.toggle('preto-e-branco');
});

// Ajusta o tamanho do texto ao clicar nos botões de aumentar ou diminuir
window.onload = function() {

    // Seleciona os elementos necessários
    var corpoDaPagina = document.querySelector('body');
    var aumentarTexto = document.getElementById('aumentar-texto');
    var diminuirTexto = document.getElementById('diminuir-texto');

    var fontSize = 100; // Tamanho inicial da fonte em porcentagem

    var qntAumentarDiminuir = 10; // Quantidade para aumentar ou diminuir o tamanho da fonte em porcentagem

    // Evento para aumentar o tamanho do texto
    aumentarTexto.addEventListener('click', function() {
        fontSize += qntAumentarDiminuir;
        corpoDaPagina.style.fontSize = fontSize + '%';
    });

    // Evento para diminuir o tamanho do texto
    diminuirTexto.addEventListener('click', function() {
        fontSize -= qntAumentarDiminuir;
        corpoDaPagina.style.fontSize = fontSize + '%';
    });
}

// Alterna o modo alto contraste ao clicar no botão
document.getElementById('alterar-contraste').addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
});
