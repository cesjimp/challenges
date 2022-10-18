const inputName=document.querySelector(".name")
const inputSurname=document.querySelector(".surname")
const inputemail=document.querySelector(".email")
const inputpassword=document.querySelector(".password")
const passwordSuggestedDOM=document.querySelector(".password-suggested")

inputpassword.addEventListener("click", generarPassworSugerido)

console.log({inputpassword})


const admitedCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","+","-","*","$","%","&","!","?"];
let arrayNewPassword=[]
let newPassword;
let numaleatorio;



function aleatorio (min, max)
{
    numaleatorio = Math.floor((Math.random()*(max-min+1))+min);// se usa math.floor para poder obtener los limites, si se usa math.ceil no se obtendria el limite.
    return numaleatorio;

}
function generarPassworSugerido()
{
    arrayNewPassword=[]
    for (let i = 0; i < 12; i++) {
    
        let numIndice= aleatorio(0, admitedCharacters.length)
        arrayNewPassword.push(admitedCharacters[numIndice])
        
    }
    newPassword=arrayNewPassword.join("")
    passwordSuggestedDOM.innerHTML=(`Se ha generado el siguiente Password aleatoriamente <strong>${newPassword} </strong>desea utilizarlo? o puede hacer click en el campo Password para generar otro`)

}