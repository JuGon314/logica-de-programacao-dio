document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    descobrirNivel();
})

function descobrirNivel() {
    let nome = document.getElementById("nome").value;
    let xp = document.getElementById("xp").value;
    let resultado = document.getElementById("resul");

    if (xp < 1000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Ferro`;
    } else if (xp >= 1001 && xp < 2000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Bronze`;
    } else if (xp >= 2001 && xp < 5000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Prata`;
    } else if (xp >= 6001 && xp < 7000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Ouro`;
    } else if (xp >= 7001 && xp < 8000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Platina`;
    } else if (xp >= 8001 && xp < 9000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Ascendente`;
    } else if (xp >= 9001 && xp < 10000) {
        resultado.textContent = `O herói de nome ${nome} está no nível Imortal`;
    } else {
        resultado.textContent = `O herói de nome ${nome} está no nível Radiante`;
    }
    
}