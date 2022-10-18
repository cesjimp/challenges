const weeksNumber=document.querySelector (".weeks-number")
const daysNumber=document.querySelector(".days-number")
const hoursNumber=document.querySelector(".hours-number")
const minutesNumber=document.querySelector(".minutes-number")
const secondsNumber=document.querySelector(".seconds-number")
const pastOrFutureDOM=document.querySelector(".pastorfuture")
const DateSelectedDay=document.querySelector(".DateSleceted-Day")
const DateSelectedMonth=document.querySelector(".DateSleceted-month")
const DateSelectedYear=document.querySelector(".DateSleceted-year")
const botonCalcular = document.querySelector(".boton-calcular")



const milisecondsCronometerNumber = document.querySelector(".miliseconds-cronometro-number")
const secondsCronometerNumber = document.querySelector(".seconds-cronometro-number")
const minutesCronometerNumber = document.querySelector(".minutes-cronometro-number")
const hoursCronometerNumber = document.querySelector(".hours-cronometro-number")
const daysCronometerNumber = document.querySelector(".days-cronometro-number")
const botonIniciarCronometro=document.querySelector(".boton-start")
const botonLap=document.querySelector(".boton-lap")
const resultadosLaps=document.querySelector(".laps")
const botonStop=document.querySelector(".boton-stop")

botonCalcular.addEventListener("click",iniciarcontador)
botonIniciarCronometro.addEventListener("click",iniciarCronometro)
botonLap.addEventListener("click", capturarTiempo)
// botonStop.addEventListener("click",stop)



let fulltodayDate= new Date ()
let fullDateSelected;


const yearToday=fulltodayDate.getFullYear()
const monthToday=fulltodayDate.getMonth()+1
const dayToday=fulltodayDate.getDate()
const milisecondsInaWeek=604800000
const milisecondsInaDay=86400000
const milisecondsInanHour=3600000
const milisecondsInaMinute=60000
const milisecondsInaSecond=1000

let SelectedDateYear;
let SelectedDateMonth;
let SelectedDateDay;
let milisecondsCronometro;
let lapNumber=0


new Date()


function iniciarcontador()
{
setInterval(cuantosDias,1000)
function cuantosDias()
{
    fulltodayDate=new Date()
    SelectedDateYear=DateSelectedDay.value
    SelectedDateMonth=(DateSelectedMonth.value)-1
    SelectedDateDay=DateSelectedYear.value
    fullDateSelected=new Date(SelectedDateDay,SelectedDateMonth,SelectedDateYear)

    if(fulltodayDate>fullDateSelected)
    {
        
        pastOrFutureDOM.innerHTML=(`Desde el dia ${fullDateSelected} hasta hoy ${fulltodayDate} han pasado: `)
        let milisecondsToDate=fulltodayDate-fullDateSelected
        let howManyWeeksInteger=Math.floor(milisecondsToDate/milisecondsInaWeek) // cuantas semanas
        let remhowManyWeeksInteger=milisecondsToDate%milisecondsInaWeek
    
        let howManyDaysInteger=Math.floor(remhowManyWeeksInteger/milisecondsInaDay) //Cuantos dias
        let remhowManyDaysInteger = remhowManyWeeksInteger%milisecondsInaDay
    
        let howManyHoursInteger=Math.floor(remhowManyDaysInteger/milisecondsInanHour) //Cuantas Horas
        let remhowManyHoursInteger=remhowManyDaysInteger%milisecondsInanHour
    
        let howManyMinutesInteger=Math.floor(remhowManyHoursInteger/milisecondsInaMinute) //Cuantos minutos
        let remhowManyMinutesInteger=remhowManyHoursInteger%milisecondsInaMinute
    
        let howMnaySecondsInteger=Math.floor(remhowManyMinutesInteger/milisecondsInaSecond)


        
        weeksNumber.innerText=(howManyWeeksInteger)
        daysNumber.innerText=(howManyDaysInteger)
        hoursNumber.innerText=(howManyHoursInteger)
        minutesNumber.innerText=(howManyMinutesInteger)
        secondsNumber.innerText=(howMnaySecondsInteger)
        
        console.log("dia del pasado")
    }
    else
    {
        console.log("dia del futuro")
        pastOrFutureDOM.innerHTML=(`Desde Hoy ${fulltodayDate} hasta el ${fullDateSelected} faltan:`)
        let milisecondsToDate=fullDateSelected-fulltodayDate
        let howManyWeeksInteger=Math.floor(milisecondsToDate/milisecondsInaWeek) // cuantas semanas
        let remhowManyWeeksInteger=milisecondsToDate%milisecondsInaWeek
    
        let howManyDaysInteger=Math.floor(remhowManyWeeksInteger/milisecondsInaDay) //Cuantos dias
        let remhowManyDaysInteger = remhowManyWeeksInteger%milisecondsInaDay
    
        let howManyHoursInteger=Math.floor(remhowManyDaysInteger/milisecondsInanHour) //Cuantas Horas
        let remhowManyHoursInteger=remhowManyDaysInteger%milisecondsInanHour
    
        let howManyMinutesInteger=Math.floor(remhowManyHoursInteger/milisecondsInaMinute) //Cuantos minutos
        let remhowManyMinutesInteger=remhowManyHoursInteger%milisecondsInaMinute
    
        let howMnaySecondsInteger=Math.floor(remhowManyMinutesInteger/milisecondsInaSecond)

    
    weeksNumber.innerText=(howManyWeeksInteger)
    daysNumber.innerText=(howManyDaysInteger)
    hoursNumber.innerText=(howManyHoursInteger)
    minutesNumber.innerText=(howManyMinutesInteger)
    secondsNumber.innerText=(howMnaySecondsInteger)
    
        
    
    }

}

}

/**
 * It takes the current date and time, and then it calculates the difference between the current date
 * and time and the date and time when the function was called.
 * @returns the array timeNow.
 */
function iniciarCronometro()
{
    

    let dateStart= new Date()
    botonIniciarCronometro.style.display="none"
    timeNow=[]
    
    setInterval(cronometro)
    function cronometro()
    {
        
        let dateNow=new Date()
        milisecondsCronometro=dateNow-dateStart
        let howManyDaysHasPassedCronometer = Math.floor(milisecondsCronometro/milisecondsInaDay) //Cuantos dias
        let remhowManyDaysHasPassedCronometer=(milisecondsCronometro%milisecondsInaDay)

        let howManyHoursHasPassedCronometer=Math.floor(remhowManyDaysHasPassedCronometer/milisecondsInanHour) //Cuantas Horas
        let remhowManyHoursHasPassedCronometer=(remhowManyDaysHasPassedCronometer%milisecondsInanHour)

        let howManyMinutesHasPassedCronometer=Math.floor(remhowManyHoursHasPassedCronometer/milisecondsInaMinute)
        let remhowManyMinutesHasPassedCronometer=(remhowManyHoursHasPassedCronometer%milisecondsInaMinute)

        let howManySecondsHasPassedCronometer=Math.floor(remhowManyMinutesHasPassedCronometer/milisecondsInaSecond)
        let remhowManySecondsHasPassedCronometer =(remhowManyMinutesHasPassedCronometer%milisecondsInaSecond)
        milisecondsCronometerNumber.innerHTML=(remhowManySecondsHasPassedCronometer)
        secondsCronometerNumber.innerHTML=(howManySecondsHasPassedCronometer)
        minutesCronometerNumber.innerHTML=(howManyMinutesHasPassedCronometer)
        hoursCronometerNumber.innerHTML=(howManyHoursHasPassedCronometer)
        daysCronometerNumber.innerHTML=(howManyDaysHasPassedCronometer)
        timeNow=[howManyDaysHasPassedCronometer, howManyHoursHasPassedCronometer, howManyMinutesHasPassedCronometer,howManySecondsHasPassedCronometer, remhowManySecondsHasPassedCronometer ]
        
        
    }return timeNow

}

/**
 * It creates a paragraph element, appends it to the resultadosLaps div, and then fills it with the
 * timeNow array.
 */
function capturarTiempo()
{
    lapNumber=lapNumber+1
    let timeLapCapture=document.createElement("p");
    resultadosLaps.appendChild(timeLapCapture)
    let milisecondsUntilNow=timeNow[4]
    let secondsUntilNow=timeNow[3]
    let minutesUntilNow=timeNow[2]
    let hoursUntilNow=timeNow[1]
    let daysUntilNow=timeNow[0]
    timeLapCapture.innerHTML=(`Lap ${lapNumber}: d:${daysUntilNow} H:${hoursUntilNow} m:${minutesUntilNow} s:${secondsUntilNow} ms:${milisecondsUntilNow}`)
    console.log(timeNow)
}

function stop ()
{
    
    
    let milisecondsUntilNow=timeNow[4]
    let secondsUntilNow=timeNow[3]
    let minutesUntilNow=timeNow[2]
    let hoursUntilNow=timeNow[1]
    let daysUntilNow=timeNow[0]
    
    milisecondsCronometerNumber.innerHTML=(milisecondsUntilNow)
    secondsCronometerNumber.innerHTML=(secondsUntilNow)
    minutesCronometerNumber.innerHTML=(minutesUntilNow)
    hoursCronometerNumber.innerHTML=(hoursUntilNow)
    daysCronometerNumber.innerHTML=(daysUntilNow)

    console.log(daysUntilNow, hoursUntilNow,minutesUntilNow,secondsUntilNow,milisecondsUntilNow )
}


