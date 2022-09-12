let ataqueJugador;
let ataqueEnemigo;
let ResBattle;
let scoreJugador;
let scoreRival;
let vidasJugador;
let vidasRival;
vidasJugador=3;
vidasRival=3;
scoreJugador=0;
scoreRival=0;
let opcionMascota;
let mascotaSeleccionada=""
let mascotaRival=""
let objetoMascotaRival=0
let mascotasArray =[] /* colocando corchetes cuadrados se crea un areglo, el cual contendra los 
diferentes objetos creados.*/
let inputAquaqueen;
let inputFireking;
let inputPrinceground;
let dispFireJugador=0
let dispWaterJugador=0
let dispGroundJugador=0
let dispFireRival=0
let dispWaterRival=0
let dispGroundRival=0
let poderesJugador=""
let poderesRival=""
let imagenMascota=new Image()
let imagenMascotaRival=new Image()
let mascotaSeleccionadaLenght=""
let mascotaX=0
let mascotaY=0
let rivalX=0
let rivalY=0
let botonArriba=document.getElementById("boton-arriba")
let botonAbajo=document.getElementById("boton-abajo")
let botonIzquierda=document.getElementById("boton-izquierda")
let botonDerecha=document.getElementById("boton-derecha")
let City=new Image()
let mokeponCity="./Assets/mokemap.png"
City.src=mokeponCity




const sectionSeleccionarAtaque=document.getElementById("seleccionar_ataque")
const sectionMensajes=document.getElementById("Mensajes")
const botonSeleccionarMascota=document.getElementById("boton-mascota")
const botonSeleccionarFire=document.getElementById("boton-fire")
const botonSeleccionarWater=document.getElementById("boton-water")
const botonSeleccionarGround=document.getElementById("boton-ground")
const botonSeleccionRestart=document.getElementById("boton-restart")
const sectionReiniciar=document.getElementById("Reinicar")
const ataqueJugador1=document.getElementById("ataqueJugador")
const ResBattle1=document.getElementById("ResBattle")
const ataqueRival1=document.getElementById("ataqueRival")
const sectionSeleccionarMascota=document.getElementById("sectionSeleccionar_mascota")
const botFire=document.getElementById("boton-fire") 
const botWater=document.getElementById("boton-water")
const botGround=document.getElementById("boton-ground") 
const cuadroScore=document.getElementById("score-temporal")
const contenedorTarjetas = document.getElementById("tarjetas-seleccion")
const sectionVermapa=document.getElementById("ver-mapa")
const mapa=document.getElementById("mapa")
const botenesMovimiento=document.getElementById("botones-movimiento")

let arribaMascota=0
let abajoMascota =0
let derechaMascota=0
let izquierdaMascota=0
let arribaEnemigo=0
let abajoEnemigo=0
let derechaEnemigo=0
let izquierdaEnemigo=0
let alto=0
let ancho=0


let lienzo=mapa.getContext("2d")


class mascota /*se usa para iniciar la construccion de una clase es como el plano de una casa*/
{
    constructor(nombre, foto,ancho,alto)/*constructor le da los atributos que pueden tener los objetos de esta clase son como las casas*/
    {
        this.nombre=nombre
        this.foto=foto
        this.ataque =[]
        this.ancho=ancho
        this.alto=alto

    }
}

/*creacion de las mascotas*/
let Aquaqueen = new mascota("Aquaqueen", "./Assets/Aquaqueen.png",ancho=70,alto=70) /*se crea un objeto con los atributos particulares de este objeto*/
let Fireking = new mascota("Fireking", "./Assets/Fireking.png",ancho=80,alto=70)
let Princeground = new mascota("Princeground", "./Assets/Princeground.png",ancho=70,alto=70)


Aquaqueen.ataque.push
(
    {nombre:"💧", id:"boton-water", cantWater:3}, /*se crean los ataques para aquaqueen y se hace referencia al boton que lo activa*/
    {nombre:"🔥", id:"boton-fire", cantFire:1},
    {nombre:"🌱", id:"boton-ground", cantGround:1}
    
)

Fireking.ataque.push
(
    {nombre:"💧", id:"boton-water", cantWater:1}, /*se crean los ataques para fireking y se hace referencia al boton que lo activa*/
    {nombre:"🔥", id:"boton-fire", cantFire:3},
    {nombre:"🌱", id:"boton-ground",cantGround:1},
    
)

Princeground.ataque.push
(
    {nombre:"💧", id:"boton-water",cantWater:1}, /*se crean los ataques para princeground y se hace referencia al boton que lo activa*/
    {nombre:"🔥", id:"boton-fire",cantFire:1},
    {nombre:"🌱", id:"boton-ground",cantGround:3},
   
)

mascotasArray.push(Aquaqueen, Fireking,Princeground) /*el metodo push inserta los objetos que se le indiquen al array que se le indique*/



function iniciarJuego()//todo loq ue se debe ejecutar para tener disponible el juego para iniciar.
{
    sectionSeleccionarAtaque.style.display="none"  //Esconde una seccion del HTML
    sectionVermapa.style.display="none"
    mascotasArray.forEach((mascota)=> /* se indica que por cada uno de los objetos que contiene el array haga algo, en este caso es crear cada mascota de acuerdo a lo que contiene el array*/
    {
        opcionMascota=`
        <input type="radio" name="tarjetas" id="${mascota.nombre}"/>
        <label class="tarjetaMascota" for="${mascota.nombre}" >
            <p>${mascota.nombre}</p>
            <img src="${mascota.foto}" alt="${mascota.nombre}">
        </label>
        ` /*esta seccion toma lo que se tenia en HTML y se modifica con las caracterisiticas particulares de cada mascota, de acuerdo a los atributos de cada objeto*/
    
        contenedorTarjetas.innerHTML+= opcionMascota
        inputAquaqueen=document.getElementById(Aquaqueen.nombre)
        inputFireking=document.getElementById(Fireking.nombre)
        inputPrinceground=document.getElementById(Princeground.nombre)

    
    })
    sectionMensajes.style.display="none"
    botonSeleccionarMascota.addEventListener("click",seleccionarMascotaJugador)
    botonSeleccionarFire.addEventListener("click",seleccionarFire)
    botonSeleccionarWater.addEventListener("click",seleccionarWater)
    botonSeleccionarGround.addEventListener("click",seleccionarGround)
    botonSeleccionRestart.addEventListener("click",seleccionarRestart)
    sectionReiniciar.style.display="none"  //Esconde una seccion del HTML
    botonArriba.addEventListener("mousedown",funcBotonArriba)
    botonAbajo.addEventListener("mousedown",funcBotonAbajo)
    botonIzquierda.addEventListener("mousedown",funcBotonIzquierda)
    botonDerecha.addEventListener("mousedown",funcBotonDerecha)
    window.addEventListener("keyup", dibujarTeclado);
    aleatorio(10,300)
    mascotaX=numaleatorio
    aleatorio(10,300)
    mascotaY=numaleatorio
    aleatorio(10,300)
    rivalX=numaleatorio
    aleatorio(10,300)

    arribaMascota =mascotaY
    abajoMascota =mascotaY+alto
    derechaMascota=mascotaX+ancho
    izquierdaMascota=mascotaX
    arribaEnemigo =rivalY
    abajoEnemigo = rivalY+alto
    derechaEnemigo=rivalX+ancho
    izquierdaEnemigo=rivalX

    console.log("mascota X"+mascotaX)
    console.log("mascota Y"+mascotaY)
    console.log("Rival X"+rivalX)
    console.log("Rival Y"+rivalY)
    console.log("Abajo Mascota"+abajoMascota)
    console.log("Arriba Enemigo"+arribaEnemigo)
    console.log("Arriba Mascota"+arribaMascota)
    console.log("Abajo Enemigo"+abajoEnemigo)
    console.log("Derecha Mascota"+derechaMascota)
    console.log("Izquierda Enemigo"+izquierdaEnemigo)
    console.log("Derecha Enemigo"+derechaEnemigo)
    console.log("Izquierda Mascota"+izquierdaMascota)

}

function funcBotonArriba()
{
    mascotaY=mascotaY-5
    moverPersonaje()
    cazarRival()
    console.log(mascotaX,mascotaY,rivalX,rivalY)
}

function funcBotonAbajo()
{
    mascotaY=mascotaY+5
    moverPersonaje()
    cazarRival()
    console.log(mascotaX,mascotaY,rivalX,rivalY)
}

function funcBotonIzquierda()
{
    mascotaX=mascotaX-5
    moverPersonaje()
    cazarRival()
    console.log(mascotaX,mascotaY,rivalX,rivalY)
 
}

function funcBotonDerecha()
{
    mascotaX=mascotaX+5
    moverPersonaje()
    cazarRival()
    console.log(mascotaX,mascotaY,rivalX,rivalY) 
}

function crearMensaje()//CREA UN ELEMENTO HTML
{

    let parrafoAtaqueJugador=document.createElement("p");
    ataqueJugador1.appendChild(parrafoAtaqueJugador)
    parrafoAtaqueJugador.innerHTML=ataqueJugador
    let parrafoAtaqueRival=document.createElement("p");
    ataqueRival1.appendChild(parrafoAtaqueRival)
    parrafoAtaqueRival.innerHTML=ataqueEnemigo
    let ParrafoResBattle=document.createElement("p");
    ResBattle1.appendChild(ParrafoResBattle)
    ParrafoResBattle.innerHTML=ResBattle


}

function seleccionarMascotaJugador()//se activa cuando se da click sobre el boton de seleccionar 
{
    //valida que opcion de los radio ceck fue seleccionado y asigna el nombre de la mascota a la variable mascotaSeleccioanda

    
    if (inputAquaqueen.checked)//se puede hacer la comparacion o dejar sin el ==true ya que por defecto estaria diciendo que es true cuando esta checked
    {
        mascotaSeleccionada=inputAquaqueen.id
        dispWaterJugador=mascotasArray[0].ataque[0].cantWater
        dispFireJugador=mascotasArray[0].ataque[1].cantFire
        dispGroundJugador=mascotasArray[0].ataque[2].cantGround
        mascotaSeleccionadaLenght=0
        poderesJugador=("💧 "+dispWaterJugador+" 🔥"+ dispFireJugador+" 🌱 "+dispGroundJugador)              
    }
        else if (inputFireking.checked==true)
        {
            mascotaSeleccionada=inputFireking.id
            dispWaterJugador=mascotasArray[1].ataque[0].cantWater
            dispFireJugador=mascotasArray[1].ataque[1].cantFire
            dispGroundJugador=mascotasArray[1].ataque[2].cantGround
            mascotaSeleccionadaLenght=1
            poderesJugador=("💧 "+dispWaterJugador+" 🔥"+ dispFireJugador+" 🌱 "+dispGroundJugador)  
        }
        else if (inputPrinceground.checked==true)
        {
            mascotaSeleccionada=inputPrinceground.id
            dispWaterJugador=mascotasArray[2].ataque[0].cantWater
            dispFireJugador=mascotasArray[2].ataque[1].cantFire
            dispGroundJugador=mascotasArray[2].ataque[2].cantGround
            mascotaSeleccionadaLenght=2
            poderesJugador=("💧 "+dispWaterJugador+" 🔥"+ dispFireJugador+" 🌱 "+dispGroundJugador) 
        }
        else 
        {
            alert("NO SELECCIONASTE NINGUNA MASCOTA")
            location.reload()

        
        }
        aleatorio(0,2)
        objetoMascotaRival=mascotasArray[(numaleatorio)]
        mascotaRival=mascotasArray[(numaleatorio)].nombre
        dispWaterRival=mascotasArray[(numaleatorio)].ataque[0].cantWater
        dispFireRival=mascotasArray[(numaleatorio)].ataque[1].cantFire
        dispGroundRival=mascotasArray[(numaleatorio)].ataque[2].cantGround
        poderesRival=("💧 "+dispWaterRival+" 🔥"+ dispFireRival+" 🌱 "+dispGroundRival) 

       
        if ((inputAquaqueen.checked)||(inputFireking.checked)||(inputPrinceground.checked))
        {
            document.getElementById("mascota-jugador").innerHTML= mascotaSeleccionada ;
            document.getElementById("mascota-adversario").innerHTML=" -VS-" + mascotaRival;
        }



        sectionSeleccionarMascota.style.display="none"
        sectionVermapa.style.display="grid"
        // sectionSeleccionarAtaque.style.display="flex"
        // sectionMensajes.style.display="block"
        moverPersonaje()



}




function cazarRival()
{
    if(abajoMascota<arribaEnemigo||arribaMascota>abajoEnemigo||derechaMascota<izquierdaEnemigo||izquierdaMascota>derechaEnemigo)
    {
        arribaMascota =mascotaY
        abajoMascota =mascotaY+alto
        derechaMascota=mascotaX+ancho
        izquierdaMascota=mascotaX
        arribaEnemigo =rivalY
        abajoEnemigo = rivalY+alto
        derechaEnemigo=rivalX+ancho
        izquierdaEnemigo=rivalX

    }
    else
    {
        sectionSeleccionarAtaque.style.display="flex"
        sectionMensajes.style.display="block"
        mapa.style.display="none"
        botenesMovimiento.style.display="none"  
    }

    console.log("mascota X"+mascotaX)
    console.log("mascota Y"+mascotaY)
    console.log("Rival X"+rivalX)
    console.log("Rival Y"+rivalY)
    console.log("Abajo Mascota"+abajoMascota)
    console.log("Arriba Enemigo"+arribaEnemigo)
    console.log("Arriba Mascota"+arribaMascota)
    console.log("Abajo Enemigo"+abajoEnemigo)
    console.log("Derecha Mascota"+derechaMascota)
    console.log("Izquierda Enemigo"+izquierdaEnemigo)
    console.log("Derecha Enemigo"+derechaEnemigo)
    console.log("Izquierda Mascota"+izquierdaMascota)

}

function seleccionarFire()
{
    ataqueJugador=""
    ataqueEnemigo=""
    ataqueJugador="🔥";
    ataqueEnemigoRandom()
    battle(ataqueJugador,ataqueEnemigo)
    
}

function seleccionarWater()
{
    ataqueJugador=""
    ataqueEnemigo=""
    ataqueJugador="💧";
    ataqueEnemigoRandom()
    battle(ataqueJugador,ataqueEnemigo)
}

function seleccionarGround()
{
    ataqueJugador=""
    ataqueEnemigo=""
    ataqueJugador="🌱";
    ataqueEnemigoRandom()
    battle(ataqueJugador,ataqueEnemigo)

}

function seleccionarRestart()
{
   location.reload()
}

function aleatorio (min, max)
{
    numaleatorio = Math.floor((Math.random()*(max-min+1))+min);// se usa math.floor para poder obtener los limites, si se usa math.ceil no se obtendria el limite.
    return numaleatorio;

}

function ataqueEnemigoRandom()//Funcion para generar ataque aleatorio de enemigo
{
    aleatorio(0,2)
    ataqueEnemigo=objetoMascotaRival.ataque[numaleatorio].nombre

console.log(ataqueEnemigo)
}

function battle(ataqueJugador,ataqueEnemigo)//Funcion para generar batalla

{

    
    if (ataqueJugador=="💧"&& ataqueEnemigo=="🔥")
        {
            ResBattle="🥳"
            scoreJugador=scoreJugador+1
            vidasRival=vidasRival-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador-1
            dispFireJugador=dispFireJugador
            dispGroundJugador=dispGroundJugador
            dispWaterRival=dispWaterRival
            dispFireRival=dispFireRival-1
            dispGroundRival=dispGroundRival
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)

            if (scoreJugador==3||scoreRival==3)
            {

                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }
           
        }
        else if (ataqueJugador=="🔥"&& ataqueEnemigo=="🌱")
        {
            ResBattle="🥳"
            scoreJugador=scoreJugador+1
            vidasRival=vidasRival-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador
            dispFireJugador=dispFireJugador-1
            dispGroundJugador=dispGroundJugador
            dispWaterRival=dispWaterRival
            dispFireRival=dispFireRival
            dispGroundRival=dispGroundRival-1
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
            if (scoreJugador==3||scoreRival==3)
            {

                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }


        }
        else if (ataqueJugador=="🌱"&& ataqueEnemigo=="💧")
        {
            ResBattle="🥳"
            scoreJugador=scoreJugador+1
            vidasRival=vidasRival-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador
            dispFireJugador=dispFireJugador
            dispGroundJugador=dispGroundJugador-1
            dispWaterRival=dispWaterRival-1
            dispFireRival=dispFireRival
            dispGroundRival=dispGroundRival
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
            if (scoreJugador==3||scoreRival==3)
            {
                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }

        }
        else if (ataqueJugador==ataqueEnemigo)
        {
            ResBattle="🤝"
            scoreJugador=scoreJugador
            vidasRival=vidasRival
            dispWaterJugador=dispWaterJugador
            dispFireJugador=dispFireJugador
            dispGroundJugador=dispGroundJugador
            dispWaterRival=dispWaterRival
            dispFireRival=dispFireRival
            dispGroundRival=dispGroundRival
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
            crearMensaje()
            resultadoGuerra()
        }
        
        else if (ataqueEnemigo=="💧"&& ataqueJugador=="🔥")
        {
            ResBattle="😒"
            scoreRival=scoreRival+1
            vidasJugador=vidasJugador-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador
            dispFireJugador=dispFireJugador-1
            dispGroundJugador=dispGroundJugador
            dispWaterRival=dispWaterRival-1
            dispFireRival=dispFireRival
            dispGroundRival=dispGroundRival
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)

            if (scoreJugador==3||scoreRival==3)
            {

                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }

            
        }
        else if (ataqueEnemigo=="🔥"&& ataqueJugador=="🌱")
        {
            ResBattle="😒"
            scoreRival=scoreRival+1
            vidasJugador=vidasJugador-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador
            dispFireJugador=dispFireJugador
            dispGroundJugador=dispGroundJugador-1
            dispWaterRival=dispWaterRival
            dispFireRival=dispFireRival-1
            dispGroundRival=dispGroundRival
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
            if (scoreJugador==3||scoreRival==3)
            {

                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }

        }
        else if (ataqueEnemigo=="🌱"&& ataqueJugador=="💧")
        {
            ResBattle="😒"
            scoreRival=scoreRival+1
            vidasJugador=vidasJugador-1
            crearMensaje()
            resultadoGuerra()
            dispWaterJugador=dispWaterJugador-1
            dispFireJugador=dispFireJugador
            dispGroundJugador=dispGroundJugador
            dispWaterRival=dispWaterRival
            dispFireRival=dispFireRival
            dispGroundRival=dispGroundRival-1
            disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
            if (scoreJugador==3||scoreRival==3)
            {
                juegoTerminado()
                sectionReiniciar.style.display="flex"
            }        
                            
        }
        poderesJugador=("💧 "+ dispWaterJugador +" 🔥"+ dispFireJugador +" 🌱 "+ dispGroundJugador); 
        poderesRival=("💧 "+ dispWaterRival +" 🔥"+ dispFireRival+" 🌱 "+ dispGroundRival ); 
        console.log(poderesJugador)
        console.log(poderesRival)
            
}
function juegoTerminado()
{

    botonSeleccionarFire.disabled=true
    botonSeleccionarWater.disabled=true
    botonSeleccionarGround.disabled=true
    botonSeleccionRestart.disabled=false
    botFire.style.display="none"
    botWater.style.display="none"
    botGround.style.display="none"
}

function resultadoGuerra()
{
    if (scoreJugador==3)
    {
        cuadroScore.innerHTML="GANASTE "+ scoreJugador + "-"+scoreRival
    }
    else if(scoreRival==3)
    {
        cuadroScore.innerHTML="PERDISTE " + scoreJugador + "-"+scoreRival
    }
    else
    {
        cuadroScore.innerHTML="EL SCORE PARCIAL " + scoreJugador + "-"+scoreRival
    }

}

function disablePower(dispFireJugador,dispGroundJugador,dispWaterJugador)
{
    if (dispFireJugador==0)
    {
        botFire.disabled="true"

    }
    else if (dispWaterJugador==0)
    {
        botWater.disabled="true"
    }
    else if (dispGroundJugador==0)
    {
        botGround.disabled="true"
    }
}



function moverPersonaje()
{

    lienzo.clearRect(0,0,mapa.width , mapa.height ) //borra el contenido del canvas llamado lienzo desde la posicion x, y, hasta ancho y algot del canvas
    imagenMascota.src=mascotasArray[(mascotaSeleccionadaLenght)].foto
    imagenMascotaRival.src=mascotasArray[(numaleatorio)].foto
    lienzo.drawImage(City,0,0,mapa.width , mapa.height)
    lienzo.drawImage(imagenMascota, mascotaX,mascotaY,80,80)
    lienzo.drawImage(imagenMascotaRival,rivalX,rivalY,80,80)
    mascotaX=mascotaX
    mascotaY=mascotaY
}

function dibujarTeclado(event)
{
    switch(event.key)
   
    {
        case "ArrowUp":
            funcBotonArriba()
            break
        case "ArrowDown":
            funcBotonAbajo()
            break
        case "ArrowLeft":
            funcBotonIzquierda()
            break
        case "ArrowRight":
            funcBotonDerecha()
            break
        default:
            break 

    }

}


window.addEventListener("load", iniciarJuego) //esta funcion permite que se cargue primero todo el codigo HTML y esten disponibles todos los botones a pesar que el script fue insertado en el head del HTML
