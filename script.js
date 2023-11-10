let visor = document.getElementById('visor');
let memoria = 0;

function AddVisor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function calcularResultado() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = 'Erro';
    }
}

function ArmazenaMemoria() {
    memoria += parseFloat(visor.value) || 0;
}

function RecuperaMemoria() {
    visor.value += memoria;
}

function LimpaMemoria() {
    memoria = 0;
}
