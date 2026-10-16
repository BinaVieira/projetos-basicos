const form = document.getElementById('form-imc');
const nomeInput = document.getElementById('nome');
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const resultado = document.getElementById('valor');

function obterClassificacaoIMC(imc) {
    if (imc < 18.5) return 'abaixo do peso!';
    if (imc < 25.0) return 'com o peso ideal!';
    if (imc < 30.0) return 'levemente acima do peso!';
    if (imc < 35.0) return 'com obesidade grau I!';
    if (imc < 40.0) return 'com obesidade grau II!';
    return 'com obesidade grau III!';
}

function parseNumero(valor) {
    if (!valor) return NaN;
    return parseFloat(valor.replace(',', '.'));
}

function calcularIMC(event) {
    if (event) event.preventDefault();

    const nome = nomeInput.value.trim();
    let altura = parseNumero(alturaInput.value);
    const peso = parseNumero(pesoInput.value);

    //validação dos campos 
    if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Por favor, preencha todos os campos com valores válidos!';
        return;
    }

    //ajusta a altura 
    if (altura > 3) {
        altura = altura / 100;
    }

    const valorIMC = peso / (altura ** 2);
    const classificacao = obterClassificacaoIMC(valorIMC);

    resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e você está ${classificacao}`;
}

if (form) {
    form.addEventListener('submit', calcularIMC);
} else {
    document.getElementById('calcular').addEventListener('click', calcularIMC);
}