var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null){
        return;
    }
    
    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') {
        return;
    }
    
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#444';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var qdd1 = document.getElementById('1');
    var qdd2 = document.getElementById('2');
    var qdd3 = document.getElementById('3');
    var qdd4 = document.getElementById('4');
    var qdd5 = document.getElementById('5');
    var qdd6 = document.getElementById('6');
    var qdd7 = document.getElementById('7');
    var qdd8 = document.getElementById('8');
    var qdd9 = document.getElementById('9');

    if (checaSequencia(qdd1, qdd2, qdd3)) {
        mudaCorQuadrado(qdd1, qdd2, qdd3);
        mudaVencedor(qdd1);
        return;
    }
    
    if (checaSequencia(qdd4, qdd5, qdd6)) {
        mudaCorQuadrado(qdd4, qdd5, qdd6);
        mudaVencedor(qdd4);
        return;
    }
    
    if (checaSequencia(qdd7, qdd8, qdd9)) {
        mudaCorQuadrado(qdd7, qdd8, qdd9);
        mudaVencedor(qdd7);
        return;
    }
    
    if (checaSequencia(qdd1, qdd4, qdd7)) {
        mudaCorQuadrado(qdd1, qdd4, qdd7);
        mudaVencedor(qdd1);
        return;
    }
    
    if (checaSequencia(qdd2, qdd5, qdd8)) {
        mudaCorQuadrado(qdd2, qdd5, qdd8);
        mudaVencedor(qdd2);
        return;
    }
    
    if (checaSequencia(qdd3, qdd6, qdd9)) {
        mudaCorQuadrado(qdd3, qdd6, qdd9);
        mudaVencedor(qdd3);
        return;
    }
    
    if (checaSequencia(qdd1, qdd5, qdd9)) {
        mudaCorQuadrado(qdd1, qdd5, qdd9);
        mudaVencedor(qdd1);
        return;
    }
    
    if (checaSequencia(qdd3, qdd5, qdd7)) {
        mudaCorQuadrado(qdd3, qdd5, qdd7);
        mudaVencedor(qdd3);
        return;
    }
}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(qdd1, qdd2, qdd3) {
    qdd1.style.background = '#0F0';
    qdd2.style.background = '#0F0';
    qdd3.style.background = '#0F0';
}

function checaSequencia(qdd1, qdd2, qdd3) {
    var ehIgual = false;

    if (qdd1.innerHTML !== '-' && 
        qdd1.innerHTML === qdd2.innerHTML && 
        qdd2.innerHTML === qdd3.innerHTML) {
        ehIgual = true;
    }
    
    return ehIgual;
}

function reinicia() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#EEE';
        quadrado.style.color = '#EEE';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}