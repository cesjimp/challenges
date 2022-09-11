console.log("funcionando")

let score = document.querySelector(".score")

let layer1_conejo = document.querySelector(".layer1_conejo")
layer1_conejo.addEventListener("mousedown", punto)

let layer2_conejo = document.querySelector(".layer2_conejo")
layer2_conejo.addEventListener("mousedown", punto)

let layer6_conejo = document.querySelector(".layer6_conejo")
layer6_conejo.addEventListener("mousedown", punto)

let layer4_conejo = document.querySelector(".layer4_conejo")
layer4_conejo.addEventListener("mousedown", punto)


let puntaje = 0

function punto()
{
    puntaje=puntaje+1
    console.log(puntaje)
    score.innerHTML="Score "+ puntaje;
}

