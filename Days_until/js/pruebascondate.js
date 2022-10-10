
let segundos= 60
let minutos=59
setInterval(() => {
    
    if (segundos==0)
    {
        minutos=minutos-1
        segundos=60
    }
    else
    {
        segundos = segundos-1
        
    }
    console.log(segundos, minutos)
}, 100);

const today = new Date()
// console.log(christmasYear)
// const christmasMonth=today.g

const christmasYear =today.getFullYear()
const christmasDate=new Date(christmasYear,11,25)


const daysuntil = (christmasDate-today)
console.log(daysuntil)


let dateInTheFuture = new Date (2022,11,31) // los meses van de 0 a 11
let dateNow = new Date(2022,09,07)
let dateToday=new Date()

let monthdateInTheFuture=dateInTheFuture.getMonth()
let monthToday=dateToday.getMonth()
let secondsNow=dateToday.getSeconds()
console.log(secondsNow)
console.log(dateInTheFuture, dateNow, dateToday)

