
let timeWindow="day"
let page=1
let arrayMovies;
let data;
let dataLastMovies;
let arrayDataGenres;
let totalPagesData;

let listToShow=0


const allMoviesButton=document.querySelector(".button__all")
const topMoviesButton=document.querySelector(".button__top")
const newMoviesButton=document.querySelector(".button__new")
const nowMoviesButton=document.querySelector(".button__now")
const fastPreviousNavigationButton = document.querySelector(".previ_fast_button")
const PreviousNavigationButton = document.querySelector(".previ__button")
const fastNextNavigationButton = document.querySelector(".next_fast_button")
const NextNavigationButton = document.querySelector(".next__button")

fastPreviousNavigationButton.addEventListener("click",movePreviousFast)
PreviousNavigationButton.addEventListener("click",movePrevious)
fastNextNavigationButton.addEventListener("click",moveNextFast)
NextNavigationButton.addEventListener("click",moveNext)
allMoviesButton.addEventListener("click", setListAll)
topMoviesButton.addEventListener("click", setListTop)
newMoviesButton.addEventListener("click", setListNew)
nowMoviesButton.addEventListener("click", setListNow)



const botonDetails0=document.querySelector(".button0")
const botonDetails1=document.querySelector(".button1")
const botonDetails2=document.querySelector(".button2")
const botonDetails3=document.querySelector(".button3")
const botonDetails4=document.querySelector(".button4")
const botonDetails5=document.querySelector(".button5")
const botonDetails6=document.querySelector(".button6")
const botonDetails7=document.querySelector(".button7")
const botonDetails8=document.querySelector(".button8")
const botonDetails9=document.querySelector(".button9")
const botonDetails10=document.querySelector(".button10")
const botonDetails11=document.querySelector(".button11")
const botonDetails12=document.querySelector(".button12")
const botonDetails13=document.querySelector(".button13")
const botonDetails14=document.querySelector(".button14")
const botonDetails15=document.querySelector(".button15")
const botonDetails16=document.querySelector(".button16")
const botonDetails17=document.querySelector(".button17")
const botonDetails18=document.querySelector(".button18")
const botonDetails19=document.querySelector(".button19")

botonDetails0.addEventListener("click", setIndex0)
botonDetails1.addEventListener("click", setIndex1)
botonDetails2.addEventListener("click", setIndex2)
botonDetails3.addEventListener("click", setIndex3)
botonDetails4.addEventListener("click", setIndex4)
botonDetails5.addEventListener("click", setIndex5)
botonDetails6.addEventListener("click", setIndex6)
botonDetails7.addEventListener("click", setIndex7)
botonDetails8.addEventListener("click", setIndex8)
botonDetails9.addEventListener("click", setIndex9)
botonDetails10.addEventListener("click", setIndex10)
botonDetails11.addEventListener("click", setIndex11)
botonDetails12.addEventListener("click", setIndex12)
botonDetails13.addEventListener("click", setIndex13)
botonDetails14.addEventListener("click", setIndex14)
botonDetails15.addEventListener("click", setIndex15)
botonDetails16.addEventListener("click", setIndex16)
botonDetails17.addEventListener("click", setIndex17)
botonDetails18.addEventListener("click", setIndex18)
botonDetails19.addEventListener("click", setIndex19)



async function testNewList()
{
    const URL_API_LASTMOVIES = `https://api.themoviedb.org/3/movie/top_rated?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$` /*Lita para trending movies */
    const lastMovies = await fetch(URL_API_LASTMOVIES)
    dataLastMovies = await lastMovies.json()
    // console.log(dataLastMovies)
}
testNewList()


async function loadTrendMovies(page)
{
    let URL_API_LASTMOVIES_SELECTED;
    console.log(page)
    // const URL_API_VideoDB =`https://api.themoviedb.org/3/movie/popular?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
    // const URL_API_VideoDB =`https://api.themoviedb.org/3/movie/top_rated?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
    
    if(listToShow==0)
    {
        URL_API_LASTMOVIES_SELECTED=`https://api.themoviedb.org/3/movie/popular?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
        
    }
    else if(listToShow==1)
    {
        URL_API_LASTMOVIES_SELECTED=`https://api.themoviedb.org/3/movie/top_rated?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
        
    }
    else if (listToShow==2)
    {
        URL_API_LASTMOVIES_SELECTED=`https://api.themoviedb.org/3/movie/upcoming?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
        
    }
    else if(listToShow==3)
    {
        URL_API_LASTMOVIES_SELECTED=`https://api.themoviedb.org/3/movie/now_playing?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US$&page=${page}`
    }

    const trendMovies = await fetch(URL_API_LASTMOVIES_SELECTED)
    data= await trendMovies.json()
    arrayMovies=data.results
    console.log(data)
    totalPagesData=data.total_pages


    const totalpages=document.querySelector(".total_pages")
    const actualPage=document.querySelector(".actual_page")
    totalpages.innerText=totalPagesData
    actualPage.innerText=page

    let sortedArray=arrayMovies.sort((a,b)=>b.vote_average-a.vote_average)
    const imagenRecommendpath0=sortedArray[0].poster_path
    const imagenrecomendation0=document.querySelector(".poster_recomedation0")
    const titleRecomendation0=document.querySelector(".title_recomendation0")
    // const movieOverviewRecomendation0=document.querySelector(".overview_recomendation0")
    const ratingRecomendation0=document.querySelector(".rating_recomendation0")
    
    imagenrecomendation0.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath0}`
    titleRecomendation0.innerText = sortedArray[0].title
    // movieOverviewRecomendation0.innerText=sortedArray[0].overview
    ratingRecomendation0.innerText=`${(sortedArray[0].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath1=sortedArray[1].poster_path
    const imagenrecomendation1=document.querySelector(".poster_recomedation1")
    const titleRecomendation1=document.querySelector(".title_recomendation1")
    const movieOverviewRecomendation1=document.querySelector(".overview_recomendation1")
    const ratingRecomendation1=document.querySelector(".rating_recomendation1")
    
    imagenrecomendation1.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath1}`
    titleRecomendation1.innerText = sortedArray[1].title
    // movieOverviewRecomendation1.innerText=sortedArray[1].overview
    ratingRecomendation1.innerText=`${(sortedArray[1].vote_average.toFixed(1))}⭐`


    const imagenRecommendpath2=sortedArray[2].poster_path
    const imagenrecomendation2=document.querySelector(".poster_recomedation2")
    const titleRecomendation2=document.querySelector(".title_recomendation2")
    // const movieOverviewRecomendation2=document.querySelector(".overview_recomendation2")
    const ratingRecomendation2=document.querySelector(".rating_recomendation2")
    
    imagenrecomendation2.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath2}`
    titleRecomendation2.innerText = sortedArray[2].title
    // movieOverviewRecomendation2.innerText=sortedArray[2].overview
    ratingRecomendation2.innerText=`${(sortedArray[2].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath3=sortedArray[3].poster_path
    const imagenrecomendation3=document.querySelector(".poster_recomedation3")
    const titleRecomendation3=document.querySelector(".title_recomendation3")
    // const movieOverviewRecomendation3=document.querySelector(".overview_recomendation3")
    const ratingRecomendation3=document.querySelector(".rating_recomendation3")
    
    imagenrecomendation3.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath3}`
    titleRecomendation3.innerText = sortedArray[3].title
    // movieOverviewRecomendation3.innerText=sortedArray[3].overview
    ratingRecomendation3.innerText=`${(sortedArray[3].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath4=sortedArray[4].poster_path
    const imagenrecomendation4=document.querySelector(".poster_recomedation4")
    const titleRecomendation4=document.querySelector(".title_recomendation4")
    // const movieOverviewRecomendation4=document.querySelector(".overview_recomendation4")
    const ratingRecomendation4=document.querySelector(".rating_recomendation4")
    
    imagenrecomendation4.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath4}`
    titleRecomendation4.innerText = sortedArray[4].title
    // movieOverviewRecomendation4.innerText=sortedArray[4].overview
    ratingRecomendation4.innerText=`${(sortedArray[4].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath5=sortedArray[5].poster_path
    const imagenrecomendation5=document.querySelector(".poster_recomedation5")
    const titleRecomendation5=document.querySelector(".title_recomendation5")
    // const movieOverviewRecomendation5=document.querySelector(".overview_recomendation5")
    const ratingRecomendation5=document.querySelector(".rating_recomendation5")
    
    imagenrecomendation5.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath5}`
    titleRecomendation5.innerText = sortedArray[5].title
    // movieOverviewRecomendation5.innerText=sortedArray[5].overview
    ratingRecomendation5.innerText=`${(sortedArray[5].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath6=sortedArray[6].poster_path
    const imagenrecomendation6=document.querySelector(".poster_recomedation6")
    const titleRecomendation6=document.querySelector(".title_recomendation6")
    // const movieOverviewRecomendation6=document.querySelector(".overview_recomendation6")
    const ratingRecomendation6=document.querySelector(".rating_recomendation6")
    
    imagenrecomendation6.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath6}`
    titleRecomendation6.innerText = sortedArray[6].title
    // movieOverviewRecomendation6.innerText=sortedArray[6].overview
    ratingRecomendation6.innerText=`${(sortedArray[6].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath7=sortedArray[7].poster_path
    const imagenrecomendation7=document.querySelector(".poster_recomedation7")
    const titleRecomendation7=document.querySelector(".title_recomendation7")
    // const movieOverviewRecomendation7=document.querySelector(".overview_recomendation7")
    const ratingRecomendation7=document.querySelector(".rating_recomendation7")
    
    imagenrecomendation7.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath7}`
    titleRecomendation7.innerText = sortedArray[7].title
    // movieOverviewRecomendation7.innerText=sortedArray[7].overview
    ratingRecomendation7.innerText=`${(sortedArray[7].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath8=sortedArray[8].poster_path
    const imagenrecomendation8=document.querySelector(".poster_recomedation8")
    const titleRecomendation8=document.querySelector(".title_recomendation8")
    // const movieOverviewRecomendation8=document.querySelector(".overview_recomendation8")
    const ratingRecomendation8=document.querySelector(".rating_recomendation8")
    
    imagenrecomendation8.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath8}`
    titleRecomendation8.innerText = sortedArray[8].title
    // movieOverviewRecomendation8.innerText=sortedArray[8].overview
    ratingRecomendation8.innerText=`${(sortedArray[8].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath9=sortedArray[9].poster_path
    const imagenrecomendation9=document.querySelector(".poster_recomedation9")
    const titleRecomendation9=document.querySelector(".title_recomendation9")
    // const movieOverviewRecomendation9=document.querySelector(".overview_recomendation9")
    const ratingRecomendation9=document.querySelector(".rating_recomendation9")
    
    imagenrecomendation9.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath9}`
    titleRecomendation9.innerText = sortedArray[9].title
    // movieOverviewRecomendation9.innerText=sortedArray[9].overview
    ratingRecomendation9.innerText=`${(sortedArray[9].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath10=sortedArray[10].poster_path
    const imagenrecomendation10=document.querySelector(".poster_recomedation10")
    const titleRecomendation10=document.querySelector(".title_recomendation10")
    // const movieOverviewRecomendation10=document.querySelector(".overview_recomendation10")
    const ratingRecomendation10=document.querySelector(".rating_recomendation10")
    
    imagenrecomendation10.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath10}`
    titleRecomendation10.innerText = sortedArray[10].title
    // movieOverviewRecomendation10.innerText=sortedArray[10].overview
    ratingRecomendation10.innerText=`${(sortedArray[10].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath11=sortedArray[11].poster_path
    const imagenrecomendation11=document.querySelector(".poster_recomedation11")
    const titleRecomendation11=document.querySelector(".title_recomendation11")
    // const movieOverviewRecomendation11=document.querySelector(".overview_recomendation11")
    const ratingRecomendation11=document.querySelector(".rating_recomendation11")
    
    imagenrecomendation11.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath11}`
    titleRecomendation11.innerText = sortedArray[11].title
    // movieOverviewRecomendation11.innerText=sortedArray[11].overview
    ratingRecomendation11.innerText=`${(sortedArray[11].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath12=sortedArray[12].poster_path
    const imagenrecomendation12=document.querySelector(".poster_recomedation12")
    const titleRecomendation12=document.querySelector(".title_recomendation12")
    // const movieOverviewRecomendation12=document.querySelector(".overview_recomendation12")
    const ratingRecomendation12=document.querySelector(".rating_recomendation12")
    
    imagenrecomendation12.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath12}`
    titleRecomendation12.innerText = sortedArray[12].title
    // movieOverviewRecomendation12.innerText=sortedArray[12].overview
    ratingRecomendation12.innerText=`${(sortedArray[12].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath13=sortedArray[13].poster_path
    const imagenrecomendation13=document.querySelector(".poster_recomedation13")
    const titleRecomendation13=document.querySelector(".title_recomendation13")
    // const movieOverviewRecomendation13=document.querySelector(".overview_recomendation13")
    const ratingRecomendation13=document.querySelector(".rating_recomendation13")
    
    imagenrecomendation13.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath13}`
    titleRecomendation13.innerText = sortedArray[13].title
    // movieOverviewRecomendation13.innerText=sortedArray[13].overview
    ratingRecomendation13.innerText=`${(sortedArray[13].vote_average.toFixed(1))}⭐`


    const imagenRecommendpath14=sortedArray[14].poster_path
    const imagenrecomendation14=document.querySelector(".poster_recomedation14")
    const titleRecomendation14=document.querySelector(".title_recomendation14")
    // const movieOverviewRecomendation14=document.querySelector(".overview_recomendation14")
    const ratingRecomendation14=document.querySelector(".rating_recomendation14")
    
    imagenrecomendation14.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath14}`
    titleRecomendation14.innerText = sortedArray[14].title
    // movieOverviewRecomendation14.innerText=sortedArray[14].overview
    ratingRecomendation14.innerText=`${(sortedArray[14].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath15=sortedArray[15].poster_path
    const imagenrecomendation15=document.querySelector(".poster_recomedation15")
    const titleRecomendation15=document.querySelector(".title_recomendation15")
    // const movieOverviewRecomendation15=document.querySelector(".overview_recomendation15")
    const ratingRecomendation15=document.querySelector(".rating_recomendation15")
    
    imagenrecomendation15.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath15}`
    titleRecomendation15.innerText = sortedArray[15].title
    // movieOverviewRecomendation15.innerText=sortedArray[15].overview
    ratingRecomendation15.innerText=`${(sortedArray[15].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath16=sortedArray[16].poster_path
    const imagenrecomendation16=document.querySelector(".poster_recomedation16")
    const titleRecomendation16=document.querySelector(".title_recomendation16")
    // const movieOverviewRecomendation16=document.querySelector(".overview_recomendation16")
    const ratingRecomendation16=document.querySelector(".rating_recomendation16")
    
    imagenrecomendation16.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath16}`
    titleRecomendation16.innerText = sortedArray[16].title
    // movieOverviewRecomendation16.innerText=sortedArray[16].overview
    ratingRecomendation16.innerText=`${(sortedArray[16].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath17=sortedArray[17].poster_path
    const imagenrecomendation17=document.querySelector(".poster_recomedation17")
    const titleRecomendation17=document.querySelector(".title_recomendation17")
    // const movieOverviewRecomendation17=document.querySelector(".overview_recomendation17")
    const ratingRecomendation17=document.querySelector(".rating_recomendation17")
    
    imagenrecomendation17.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath17}`
    titleRecomendation17.innerText = sortedArray[17].title
    // movieOverviewRecomendation17.innerText=sortedArray[17].overview
    ratingRecomendation17.innerText=`${(sortedArray[17].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath18=sortedArray[18].poster_path
    const imagenrecomendation18=document.querySelector(".poster_recomedation18")
    const titleRecomendation18=document.querySelector(".title_recomendation18")
    // const movieOverviewRecomendation18=document.querySelector(".overview_recomendation18")
    const ratingRecomendation18=document.querySelector(".rating_recomendation18")
    
    imagenrecomendation18.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath18}`
    titleRecomendation18.innerText = sortedArray[18].title
    // movieOverviewRecomendation18.innerText=sortedArray[18].overview
    ratingRecomendation18.innerText=`${(sortedArray[18].vote_average.toFixed(1))}⭐`

    const imagenRecommendpath19=sortedArray[19].poster_path
    const imagenrecomendation19=document.querySelector(".poster_recomedation19")
    const titleRecomendation19=document.querySelector(".title_recomendation19")
    // const movieOverviewRecomendation19=document.querySelector(".overview_recomendation19")
    const ratingRecomendation19=document.querySelector(".rating_recomendation19")
    
    imagenrecomendation19.src=`https://image.tmdb.org/t/p/w300/${imagenRecommendpath19}`
    titleRecomendation19.innerText = sortedArray[19].title
    // movieOverviewRecomendation19.innerText=sortedArray[19].overview
    ratingRecomendation19.innerText=`${(sortedArray[19].vote_average.toFixed(1))}⭐`
    return data
}



async function showDetails(index)
{
    
    const URL_GENRES=`https://api.themoviedb.org/3/genre/movie/list?api_key=b3117004fe08a3e0abaa1a190e00aa26&language=en-US`
    const genderMovies= await fetch(URL_GENRES)
    dataGenres=await genderMovies.json()
    arrayDataGenres=dataGenres.genres
   

    let sortedArray=arrayMovies.sort((a,b)=>b.vote_average-a.vote_average)
    const imageMovieSelectedPath=sortedArray[index].backdrop_path
    const imageMovieSelected=document.querySelector(".image_movie_selected")
    const titleMovieSelected=document.querySelector(".title_movie_selected")
    const releaseDateMovieSelected=document.querySelector(".release_date_movie_selected")
    const genresMovieSelected=document.querySelector(".genres_movie_selected")
    const languageMovieSelected=document.querySelector(".language_movie_selected")
    const overviewMovieSelected=document.querySelector(".overview")
    
    imageMovieSelected.src=`https://image.tmdb.org/t/p/w300/${imageMovieSelectedPath}`
    titleMovieSelected.innerText=`Title: 
    ${sortedArray[index].title}`
    releaseDateMovieSelected.innerText=`Release Date: 
    ${sortedArray[index].release_date}`
    languageMovieSelected.innerText=`Original Language: 
    ${sortedArray[index].original_language}`
    overviewMovieSelected.innerText=`Overview: 
    ${sortedArray[index].overview}`
    let arrayGenresSelectedMovie=sortedArray[index].genre_ids


    let arrayGenresDescription=[]
    arrayGenresSelectedMovie.forEach(genre => {
        for (let i = 0; i < arrayDataGenres.length; i++) {

            if(genre===arrayDataGenres[i].id)
            {
                arrayGenresDescription.push(arrayDataGenres[i].name)
            }
        }
    });
    genresMovieSelected.innerText=`Genres 
    ${arrayGenresDescription}`
}


async function findgenresDescription()
{
    
}


function setIndex0()
{
    index=0
    showDetails(index)
}

function setIndex1()
{
    index=1
    showDetails(index)
}

function setIndex2()
{
    index=2
    showDetails(index)
}

function setIndex3()
{
    index=3
    showDetails(index)
}

function setIndex4()
{
    index=4
    showDetails(index)
}

function setIndex5()
{
    index=5
    showDetails(index)
}

function setIndex6()
{
    index=6
    showDetails(index)
}

function setIndex7()
{
    index=7
    showDetails(index)
}

function setIndex8()
{
    index=8
    showDetails(index)
}

function setIndex9()
{
    index=9
    showDetails(index)
}

function setIndex10()
{
    index=10
    showDetails(index)
}

function setIndex11()
{
    index=11
    showDetails(index)
}

function setIndex12()
{
    index=12
    showDetails(index)
}

function setIndex13()
{
    index=13
    showDetails(index)
}

function setIndex14()
{
    index=14
    showDetails(index)
}

function setIndex15()
{
    index=15
    showDetails(index)
}

function setIndex16()
{
    index=16
    showDetails(index)
}

function setIndex17()
{
    index=17
    showDetails(index)
}

function setIndex18()
{
    index=18
    showDetails(index)
}

function setIndex19()
{
    index=19
    showDetails(index)
}


function movePreviousFast()
{

    if(page<5)
    {
        page=1        
        loadTrendMovies(page)
        showDetails(0)

    }
    else
    {
        page=page-5
        loadTrendMovies(page)
        showDetails(0)
    }

}
function movePrevious()
{

    if(page<2)
    {
        page=1
        loadTrendMovies(page)
        showDetails(0)
    }
    else
    {
        page=page-1
        loadTrendMovies(page)
        showDetails(0)     
    }
    showDetails(0)
}
function moveNextFast()
{

    if(page>=(totalPagesData-5))
    {
        page=totalPagesData
        loadTrendMovies(page)
        showDetails(0)
    }
    else
    {
        page=page+5
        loadTrendMovies(page)
        showDetails(0) 
    }
   
}
function moveNext()
{

    if(page>=(totalPagesData-1))
    {
        page=totalPagesData
        loadTrendMovies(page)
        showDetails(0)
    }
    else
    {
        page=page+1
        loadTrendMovies(page)
        showDetails(0)  
    }
    
}

function setListAll()
{
    listToShow=0
    page=1
    loadTrendMovies(page)
    showDetails(0) 
}
function setListTop()
{
    listToShow=1
    page=1
    loadTrendMovies(page)
    showDetails(0) 
}
function setListNew()
{
    listToShow=2
    page=1
    loadTrendMovies(page)
    showDetails(0) 
}
function setListNow()
{
    listToShow=3
    page=1
    loadTrendMovies(page)
    showDetails(0) 
}


loadTrendMovies(1)
showDetails(0)

