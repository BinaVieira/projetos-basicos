const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const valor = document.getElementById('valor');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura ** 2)).toFixed(2);

        let classificacaoIMC = '';

        if (valorIMC < 18.5) {
            classificacaoIMC = 'abaixo do peso!';
        } else if (valorIMC < 25) {
            classificacaoIMC = 'com o peso ideal!';
        } else if (valorIMC < 30) {
            classificacaoIMC = 'levemente acima do peso!';
        } else if (valorIMC < 35) {
            classificacaoIMC = 'com obesidade grau I!';
        } else if (valorIMC < 40) {
            classificacaoIMC = 'com obesidade grau II!';
        } else {
            classificacaoIMC = 'com obesidade grau III!';
        }

        valor.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacaoIMC}`;

    } else {
        valor.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);