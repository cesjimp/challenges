let timeframe;
let actividadesFiltradas;
let usuario;

let TimeWorking;
let Timeplaying;
let TimeStudying;
let TimeExcersing;
let TimeSocialising;
let TimeSelfCare;
let nombre;
let apellido

let time=0

usuario="anrepo"
const dailyTimeFrameButton=document.querySelector(".button_daily")
const weeklyTimeFrameButton=document.querySelector(".button_weekly")
const monthlyTimeFrameButton=document.querySelector(".button_monthly")
const currentTimeWork=document.querySelector(".current-time_work")
const currentTimePlay=document.querySelector(".current-time_play")
const currentTimeStudy=document.querySelector(".current-time_study")
const currentTimeExcersise=document.querySelector(".current-time_excersise")
const currentTimeSocial=document.querySelector(".current-time_social")
const currentTimeSelfcare=document.querySelector(".current-time_selfcare")
const lastTimeFrameSelectedWork=document.querySelector(".last-timeframe_work")
const lastTimeFrameSelectedPlay=document.querySelector(".last-timeframe_play")
const lastTimeFrameSelectedStudy=document.querySelector(".last-timeframe_study")
const lastTimeFrameSelectedExcersise=document.querySelector(".last-timeframe_excersise")
const lastTimeFrameSelectedSocial=document.querySelector(".last-timeframe_social")
const lastTimeFrameSelectedSelfCare=document.querySelector(".last-timeframe_self-care")
const usser=document.querySelector(".usser_name")

const lastTimeWork=document.querySelector(".last-time_work")
const lastTimePlay=document.querySelector(".last-time_play")
const lastTimeStudy=document.querySelector(".last-time_study")
const lastTimeExcersise=document.querySelector(".last-time_excersise")
const lastTimeSocial=document.querySelector(".last-time_social")
const lastTimeSelfCare=document.querySelector(".last-time_self-care")


dailyTimeFrameButton.addEventListener("click", selectTimeFrameDaily)
weeklyTimeFrameButton.addEventListener("click", selectTimeFrameWeekly)
monthlyTimeFrameButton.addEventListener("click", selectTimeFrameMonthly)

function selectTimeFrameDaily()
{
    time=0
    // console.log(time)
    filtrarTimeFrame()
    actividadPersona(usuario)
    filtrarTiemposActividad(actividadesFiltradas)
    escribirDatos(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)
    // console.log(actividadesFiltradas)
    // console.log(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)

}

function selectTimeFrameWeekly()
{
    time=1
    // console.log(time)
    filtrarTimeFrame()
    actividadPersona(usuario)
    filtrarTiemposActividad(actividadesFiltradas)
    escribirDatos(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)
    // console.log(actividadesFiltradas)
    // console.log(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)

}

function selectTimeFrameMonthly()
{
    time=2
    // console.log(time)
    filtrarTimeFrame()
    actividadPersona(usuario)
    filtrarTiemposActividad(actividadesFiltradas)
    escribirDatos(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)
    // console.log(actividadesFiltradas)
    // console.log(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)

}


let datosActividadPersona=actividadPersona(usuario)

filtrarTimeFrame()

function actividadPersona (persona)
{
    const usuario = userActivities.find(function(usuario){
        return usuario.usser==persona
    }
)
nombre= usuario.name
apellido=usuario.surname
return usuario
}
// console.log(nombre, apellido)


function filtrarTimeFrame()
{
    if (time==0)
    {
        actividadesFiltradas = datosActividadPersona.timeframes.filter(function(timeframe){
            return timeframe.time == "Day"  
        });

    }else if(time==1)
    {
        actividadesFiltradas = datosActividadPersona.timeframes.filter(function(timeframe){
            return timeframe.time == "Week"  
        });
    }else if(time==2)
    {
        actividadesFiltradas = datosActividadPersona.timeframes.filter(function(timeframe){
            return timeframe.time == "Month"  
        });
    }
}



function filtrarTiemposActividad (objecttofilter)
{
    TimeWorking = objecttofilter.filter(function(activities){
        return activities.activity == "Work" 
})
    Timeplaying = objecttofilter.filter(function(activities){
    return activities.activity == "Play" 
})
    TimeStudying = objecttofilter.filter(function(activities){
    return activities.activity == "Study" 
})
    TimeExcersing = objecttofilter.filter(function(activities){
    return activities.activity == "Excersise" 
})
    TimeSocialising = objecttofilter.filter(function(activities){
    return activities.activity == "Social" 
})
    TimeSelfCare = objecttofilter.filter(function(activities){
    return activities.activity == "Self Care" 
})
}

function escribirDatos(TimeWorking, Timeplaying, TimeStudying, TimeExcersing, TimeSocialising, TimeSelfCare)
{
    usser.innerText=`${nombre} ${apellido}`
    currentTimeWork.innerText=`${TimeWorking[0].current} hrs`
    currentTimePlay.innerText=`${Timeplaying[0].current} hrs`
    currentTimeStudy.innerText=`${TimeStudying[0].current} hrs`
    currentTimeExcersise.innerText=`${TimeExcersing[0].current} hrs`
    currentTimeSocial.innerText=`${TimeSocialising[0].current} hrs`
    currentTimeSelfcare.innerText=`${TimeSelfCare[0].current} hrs`
    lastTimeWork.innerText=`${TimeWorking[0].previous} hrs`
    lastTimePlay.innerText=`${Timeplaying[0].previous} hrs`
    lastTimeStudy.innerText=`${TimeStudying[0].previous} hrs`
    lastTimeExcersise.innerText=`${TimeExcersing[0].previous} hrs`
    lastTimeSocial.innerText=`${TimeSocialising[0].previous} hrs`
    lastTimeSelfCare.innerText=`${TimeSelfCare[0].previous} hrs`
    lastTimeFrameSelectedWork.innerText=`Last ${TimeWorking[0].time}-`
    lastTimeFrameSelectedPlay.innerText=`Last ${Timeplaying[0].time}-`
    lastTimeFrameSelectedStudy.innerText=`Last ${TimeStudying[0].time}-`
    lastTimeFrameSelectedExcersise.innerText=`Last ${TimeExcersing[0].time}-`
    lastTimeFrameSelectedSocial.innerText=`Last ${TimeSocialising[0].time}-`
    lastTimeFrameSelectedSelfCare.innerText=`Last ${TimeSelfCare[0].time}-`
}

selectTimeFrameDaily()
// filtrarTiemposActividad(actividadesFiltradas)

