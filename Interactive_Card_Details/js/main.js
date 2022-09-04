const cardHolderNameInput=document.getElementById("nombre")
const cardNumberInput=document.getElementById("cardnumber")
const monthExpireInput=document.getElementById("month")
const yearExpireInput=document.getElementById("year")
const cvcCodeInput=document.getElementById("cvc")
const confirmButton=document.getElementById("confirmButton")
const formulario=document.getElementById("formulario")
const errorNombre=document.getElementById("errorNombre")
const errorNumeroTarjeta=document.getElementById("errorNumeroTarjeta")
const errorFecha=document.getElementById("errorFecha")
const errorCVCcode=document.getElementById("errorCVCcode")




let cardHolderName=0
let cardNumber=0
let monthExpire=0
let yearExpire=0
let cvcCode=0
let redFlagName=0
let redFlagCardNumber=0
let redFlagMonthExpire=0
let redFlagYear=0
let redFlagCvc=0
let longitudCvc=0



console.log({formulario})
console.log({confirmButton})
console.log({yearExpireInput})



console.log({cardHolderNameInput})
console.log({cardHolderName})

formulario.addEventListener("submit", enviarFormulario)

function enviarFormulario(event)
{
    console.log({event});
    cardHolderName=cardHolderNameInput.value;
    cardNumber=cardNumberInput.value;
    monthExpire=monthExpireInput.value;
    yearExpire=yearExpireInput.value;
    cvcCode=cvcCodeInput.value;
    console.log(cardHolderName, cardNumber, monthExpire, yearExpire, cvcCode)
    event.preventDefault()

    validarNombre()
    validarNumeroTarjeta()
    validarMesVenciomiento()
    validarAnoVencimiento()
    ValidarCvc()

    if (redFlagName==0&&redFlagCardNumber==0&&redFlagMonthExpire==0&&redFlagYear==0&&redFlagCvc==0)
    {
    console.log("todo esta correcto")
    }
    else
    {
        return
    }

}

function validarNombre()
{
    var valoresAceptados = /^[a-zA-Z ""]+$/;
        if (cardHolderName.match(valoresAceptados)){
            redFlagName=0
            errorNombre.classList.add("nodisplay")
            cardHolderNameInput.classList.remove("inputnok")
            console.log ("Nombre Correcto");
        } else {
            redFlagName=1
            errorNombre.classList.remove("nodisplay")
            cardHolderNameInput.classList.add("inputnok")
            console.log ("Nombre no puede ser vacio");
       }
}

function validarNumeroTarjeta()
{
    var cardNumberLenght=cardNumber.length
    var valoresAceptados = /^[0-9]+$/;
        if (cardNumber.match(valoresAceptados)&&cardNumberLenght==16)
        {
            redFlagCardNumber=0
            errorNumeroTarjeta.classList.add("nodisplay")
            cardNumberInput.classList.remove("inputnok")
            console.log ("Numero con longitud y formato correcto");
        } 
        else 
        {
            redFlagCardNumber=1
            errorNumeroTarjeta.classList.remove("nodisplay")
            cardNumberInput.classList.add("inputnok")
            console.log ("No tiene longitud o formato correcto");
        }
}

function validarMesVenciomiento()
{
    var valoresAceptados = /^[1-12]+$/;
    if (monthExpire.match(valoresAceptados))
        {
            redFlagMonthExpire=0
            errorFecha.classList.add("nodisplay")
            monthExpireInput.classList.remove("inputnok")
            console.log ("Es un mes aceptado");
        } 
        else 
        {
            redFlagMonthExpire=1
            errorFecha.classList.remove("nodisplay")
            monthExpireInput.classList.add("inputnok")
            console.log ("No es un mes");
        }
}

function validarAnoVencimiento()
{
    var valoresAceptados = /^[19,20,21,22,23,24,25,26,27,28,29,30]+$/;
    if (yearExpire.match(valoresAceptados))
        {
            redFlagYear=0
            errorFecha.classList.add("nodisplay")
            yearExpireInput.classList.remove("inputnok")
            console.log ("Es un ano aceptado");
        } 
        else 
        {
            redFlagMonthExpire=1
            errorFecha.classList.remove("nodisplay")
            yearExpireInput.classList.add("inputnok")
            console.log ("No es ano aceptado");
        }
}

function ValidarCvc()
{
    var valoresAceptados = /^[0-9]+$/;
    var cvcLength=cvcCode.length
    if ((cvcCode.match(valoresAceptados)&& cvcLength==3))
        {
            redFlagYear=0
            errorCVCcode.classList.add("nodisplay")
            cvcCodeInput.classList.remove("inputnok")
            console.log ("es un codigo valido", cvcLength);
        } 
        else 
        {
            redFlagMonthExpire=1
            errorCVCcode.classList.remove("nodisplay")
            cvcCodeInput.classList.add("inputnok")
            console.log ("No es un codigo valido");
        }
}

