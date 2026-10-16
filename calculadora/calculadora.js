'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? 'Erro' : a / b),
};

const operacaoPendente = () => operador !== undefined;

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
};

const extrairValorDisplay = () => {
    return parseFloat(display.textContent.replace(/\./g, '').replace(',', '.'));
};

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = extrairValorDisplay();
        novoNumero = true;

        if (isNaN(numeroAnterior) || isNaN(numeroAtual)) return;

        const resultado = operacoes[operador](numeroAnterior, numeroAtual);

        if (typeof resultado === 'number') {
            display.textContent = resultado.toLocaleString('pt-BR');
        } else {
            display.textContent = resultado; 
        }
    }
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = extrairValorDisplay();
    }
};
operadores.forEach((op) => op.addEventListener('click', selecionarOperador));

const ativarIgual = () => {
    calcular();
    operador = undefined;
};
document.getElementById('igual')?.addEventListener('click', ativarIgual);

const limparDisplay = () => (display.textContent = '');
document.getElementById('limparDisplay')?.addEventListener('click', limparDisplay);

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
};
document.getElementById('limparCalculo')?.addEventListener('click', limparCalculo);

const removerUltimoNumero = () => {
    display.textContent = display.textContent.slice(0, -1);
};
document.getElementById('backspace')?.addEventListener('click', removerUltimoNumero);

const inverterSinal = () => {
    const valorAtual = extrairValorDisplay();
    if (!isNaN(valorAtual)) {
        novoNumero = true;
        atualizarDisplay((valorAtual * -1).toLocaleString('pt-BR'));
    }
};
document.getElementById('inverter')?.addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.includes(',');
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor() && !novoNumero) {
            atualizarDisplay(',');
        } else {
            atualizarDisplay('0,');
        }
    }
};
document.getElementById('decimal')?.addEventListener('click', inserirDecimal);

const mapaTeclado = {
    '0'         : 'tecla0',
    '1'         : 'tecla1',
    '2'         : 'tecla2',
    '3'         : 'tecla3',
    '4'         : 'tecla4',
    '5'         : 'tecla5',
    '6'         : 'tecla6',
    '7'         : 'tecla7',
    '8'         : 'tecla8',
    '9'         : 'tecla9',
    '/'         : 'operadorDivisao',
    '*'         : 'operadorMultiplicacao',
    '-'         : 'operadorSubtracao',
    '+'         : 'operadorAdicao',
    Enter       : 'igual',
    '=': 'igual',
    Backspace   : 'backspace',
    c           : 'limparDisplay',
    C           : 'limparDisplay',
    Escape      : 'limparCalculo',
    ','         : 'decimal',
    '.'         : 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    if (tecla in mapaTeclado) {
        document.getElementById(mapaTeclado[tecla])?.click();
    }
};
document.addEventListener('keydown', mapearTeclado);