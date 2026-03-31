const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");

const estados = {
    normal: "criaturinha.png",
    comida: "comida.png",
    comendo: "bichinho_comendo.png",
    feliz: "criatura_feliz.png",
    bravo: "criatura_brava.png",
    morto: "criatura_morta.png",
}

let contador = 0;
let intervalo = null;
let time_Click = null;
let time_Out = null;

function init_cont() {
    if (intervalo) clearInterval(intervalo)

    intervalo = setInterval(() => {
        contador++;
        console.log("tempo: ", contador);

        if (contador == 5) {
            bicho.src = estados.bravo;
            mudarFundo("fogo.png");
        }

        if (contador == 10) {
            bicho.src = estados.morto;

            mudarFundo("cemiterio.png"); // depois cemitério

            setTimeout(() => {
                mudarFundo("ceu.png"); // primeiro céu
                
            }, 3000); // 3 segundos
        }
    }, 1000);
}

function alimentar() {
    bicho.src = estados.comendo;
    mudarFundo("jardim.png");
    contador = 0;
    console.log("comendo");

    if (time_Click) clearInterval(time_Click)

    time_Click = setTimeout(() => {
        bicho.src = estados.feliz;
        mudarFundo("jardim.png");
        time_Out = setTimeout(() => {
            bicho.src = estados.normal;
        }, 2000);
    }, 1000);
}

function mudarFundo(imagem) {
    document.body.style.backgroundImage = `url(${imagem})`;
}
mudarFundo("jardim.png");
init_cont();