const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const statusElement = document.getElementById("status");

let lampadaLigada = false;

function ligarLampada() {
    if (!lampadaLigada) {
        lampada.src = "img/img02.png"; // agora esta é a lâmpada ligada
        lampada.alt = "Lâmpada Ligada";
        lampadaLigada = true;
        atualizarEstado();
    }
}

function desligarLampada() {
    if (lampadaLigada) {
        lampada.src = "img/img01.png"; // agora esta é a lâmpada desligada
        lampada.alt = "Lâmpada Desligada";
        lampadaLigada = false;
        atualizarEstado();
    }
}

function atualizarEstado() {
    btnLigar.disabled = lampadaLigada;
    btnDesligar.disabled = !lampadaLigada;
    statusElement.innerText = lampadaLigada ? "Lâmpada ligada" : "Lâmpada desligada";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);
btnLigar.addEventListener("mouseover", ligarLampada);
btnDesligar.addEventListener("mouseover", desligarLampada);

atualizarEstado();
