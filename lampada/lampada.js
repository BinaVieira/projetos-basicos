const btnLigar = document.getElementById('btnLigar');
const btnDesligar = document.getElementById('btnDesligar');
const lampada = document.getElementById('lampada');

function estaQuebrada() {
    return lampada?.classList.contains('quebrada');
}

function ligarLampada() {
    if (!estaQuebrada()) {
        lampada?.classList.add('ligada');
    }
}

function desligarLampada() {
    if (!estaQuebrada()) {
        lampada?.classList.remove('ligada');
    }
}

function quebrarLampada() {
    lampada?.classList.toggle('quebrada');
    
    if (estaQuebrada()) {
        lampada.classList.remove('ligada');
        lampada.setAttribute('aria-label', 'Lâmpada quebrada');
    } else {
        lampada.setAttribute('aria-label', 'Lâmpada restaurada. Clique para quebrar.');
    }
}

lampada.addEventListener('click', quebrarLampada);

//acionamento via teclado (Enter ou Espaço)
lampada.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        quebrarLampada();
    }
});

btnLigar.addEventListener('click', ligarLampada);
btnDesligar.addEventListener('click', desligarLampada);