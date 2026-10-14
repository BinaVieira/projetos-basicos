const btnLigar = document.getElementById('btnLigar');
const btnDesligar = document.getElementById('btnDesligar');
const lampada = document.getElementById('lampada');

btnLigar.addEventListener('click', () => {
    lampada.classList.add('ligada')
});

btnDesligar.addEventListener('click', () => {
    lampada.classList.remove('ligada')
});


lampada.addEventListener('click', () => {
if (lampada.classList.contains('quebrada')){
     lampada.classList.remove('quebrada');
} else{
    lampada.classList.add('quebrada');
}
});

