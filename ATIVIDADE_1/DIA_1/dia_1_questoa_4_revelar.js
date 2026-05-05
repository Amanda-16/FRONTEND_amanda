function revelar(){

    document.getElementById("imagemJogador").src = "img/_vinicius_junior.png";

    document.getElementById("Nome").innerHTML = "Vinícius José Paixão de Oliveira Júnior";

    document.getElementById("Rank").innerHTML = "9,5";

    document.getElementById("Data_Nas").innerHTML = "12/07/2000 (25 anos)";

    document.getElementById("Altura").innerHTML = "1,76 m";

    document.getElementById("Posição").innerHTML = "Ponta-esquerda / Atacante";



    document.getElementById("Nome").classList.remove("placeholder");

    document.getElementById("Data_Nas").classList.remove("placeholder");

    document.getElementById("Altura").classList.remove("placeholder");

    document.getElementById("Posição").classList.remove("placeholder");



    document.getElementById("Nome").classList.add("card-text");

    document.getElementById("Data_Nas").classList.add("card-text");

    document.getElementById("Altura").classList.add("card-text");

    document.getElementById("Posição").classList.add("card-text");

}