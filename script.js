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

function SubtraiMemoria() {
    memoria -= parseFloat(visor.value) || 0;
}

function RecuperaMemoria() {
    visor.value += memoria;
}

function LimpaMemoria() {
    memoria = 0;
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            AddVisor(event.key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            AddVisor(event.key);
            break;
        case 'w':
            ArmazenaMemoria();
            break;
        case 'e':
            SubtraiMemoria();
            break;
        case 'r':
            RecuperaMemoria();
            break;
        case 'Enter':
            calcularResultado();
            break;
        case 'c':
            limparVisor();
            break;
        case 'm':
            LimpaMemoria();
            break;
    }
});