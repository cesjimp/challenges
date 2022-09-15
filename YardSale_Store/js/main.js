const naveEmailOver=document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuMobile = document.getElementById('menuHamburguesa')
const mobileMenu = document.querySelector(".mobile-menu")
const btnShoping = document.querySelector(".navbar-shopping-cart")
const contCarritoCompras=document.querySelector(".product-detail")
const contenedorProductos=document.getElementById("contenedor_productos")
const cuadroDescripcion = document.querySelector(".product-detail2")
const productDescriptionMenu=document.querySelector(".product-detail2")
const productDescriptionMenuClose=document.querySelector(".product-detail2-close")

let productosEnPantalla;
arrayBotones=[]





let isProductDescriptionClosed;
let isMenuDesktopClosed;
let ismobileMenuClosed;
let iscontCarritoComprasClosed;
let arrayListaProductos=[]
let productoEnLista;
let productDetail=document.querySelector(".product-detail2")


naveEmailOver.addEventListener("click", clickMenuDesktop)
menuMobile.addEventListener("click", clickMenuMobile)
btnShoping.addEventListener("click", cickCarritoCompras)
productDescriptionMenuClose.addEventListener("click", closeDescription)


function closeDescription ()
{
    productDescriptionMenu.classList.add("inactive")
}




function clickMenuDesktop()
{

    if (!iscontCarritoComprasClosed || !isProductDescriptionClosed)
    {
        contCarritoCompras.classList.add("inactive")
        productDescriptionMenu.classList.add("inactive")
        desktopMenu.classList.toggle("inactive");
    }
    else if (isMenuDesktopClosed && iscontCarritoComprasClosed)
    {
        desktopMenu.classList.toggle("inactive");
    }
    
    else
    {
        desktopMenu.classList.toggle("inactive");
    }
    guardarVariables()

}

function clickMenuMobile()
{
    
    if (iscontCarritoComprasClosed && ismobileMenuClosed && isProductDescriptionClosed){
        mobileMenu.classList.toggle("inactive");  
    }
    else if (!iscontCarritoComprasClosed ||!isProductDescriptionClosed)
    {
        contCarritoCompras.classList.add("inactive")
        productDescriptionMenu.classList.add("inactive")
        mobileMenu.classList.toggle("inactive");  
    }
    else
    {
        mobileMenu.classList.toggle("inactive");  
    }
    
    
guardarVariables()
}

function cickCarritoCompras()
{
    if (iscontCarritoComprasClosed&&ismobileMenuClosed && isMenuDesktopClosed && isProductDescriptionClosed)
    {
        contCarritoCompras.classList.toggle("inactive");
    }
        
    else if (!isMenuDesktopClosed || !ismobileMenuClosed ||!isProductDescriptionClosed)
    {
        desktopMenu.classList.add("inactive")
        productDescriptionMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
        contCarritoCompras.classList.toggle("inactive");
    }
    else
    {
        contCarritoCompras.classList.toggle("inactive");
    }  
    guardarVariables()
}

function opDescription ()
{
      
    if (!iscontCarritoComprasClosed || !isMenuDesktopClosed)
    {
        contCarritoCompras.classList.add("inactive");
        desktopMenu.classList.add("inactive")
        productDetail.classList.toggle("inactive")
    }
    else
    {
        productDetail.classList.toggle("inactive")
    }  
    guardarVariables()
}


function guardarVariables()

{
    isProductDescriptionClosed=productDescriptionMenu.classList.contains("inactive")
    isMenuDesktopClosed=desktopMenu.classList.contains("inactive")
    ismobileMenuClosed=mobileMenu.classList.contains("inactive")
    iscontCarritoComprasClosed=contCarritoCompras.classList.contains("inactive")
    console.log(isMenuDesktopClosed, ismobileMenuClosed, iscontCarritoComprasClosed, isProductDescriptionClosed )
}


class productlist
{
    constructor(item, price, image)
    {
        this.image=image
        this.price=price
        this.item=item
    
    }

}

let bike = new productlist ("Bike",120, src="../assets/img/Bici1.jpg")
let televisor = new productlist ("TV",250, src="../assets/img/Screen1.jpg")
let celular = new productlist ("Mobile Phone",420, src="../assets/img/Mobile1.jpg")
let bike2 = new productlist ("Bike",190, src="../assets/img/Bici2.jpg")
let televisor2 = new productlist ("TV",320, src="../assets/img/Screen2.jpg")
let celular2 = new productlist ("Mobile Phone",490, src="../assets/img/Mobile2.jpg")




arrayListaProductos.push(bike,televisor,celular,bike2,televisor2,celular2)

arrayListaProductos.forEach((productlist)=>
{
    productoEnLista=`
    <div class="product-card" id="product-card${arrayListaProductos.indexOf(productlist)}">
        <img src="${productlist.image}">
        <div class="product-info">
          <div>
            <p class="price">$ ${productlist.price}</p>
            <p class="item">${productlist.item}</p>
          </div>
          <figure>
          <p id="btn_add${arrayListaProductos.indexOf(productlist)}">
            <img src="../assets/icon/bt_add_to_cart.svg" alt="" >
            </p>
          </figure>
        </div>
    `
    
    contenedorProductos.innerHTML     
    +=productoEnLista
}
)


const product_card0=document.getElementById("product-card0")
product_card0.addEventListener("click",opDescription)
const product_card1=document.getElementById("product-card1")
product_card1.addEventListener("click",opDescription)
const product_card2=document.getElementById("product-card2")
product_card2.addEventListener("click",opDescription)
const product_card3=document.getElementById("product-card3")
product_card3.addEventListener("click",opDescription)
const product_card4=document.getElementById("product-card4")
product_card4.addEventListener("click",opDescription)
const product_card5=document.getElementById("product-card5")
product_card5.addEventListener("click",opDescription)
// const product_card6=document.getElementById("product-card6")
// product_card6.addEventListener("clic",opDescription)
// const product_card7=document.getElementById("product-card7")
// product_card7.addEventListener("clic",opDescription)
// const product_card8=document.getElementById("product-card8")
// product_card8.addEventListener("clic",opDescription)
// const product_card9=document.getElementById("product-card9")
// product_card9.addEventListener("clic",opDescription)
// const product_card10=document.getElementById("product-card10")
// product_card10.addEventListener("clic",opDescription)








// for (producto in arrayListaProductos)
// {
//     console.log(arrayListaProductos[producto].item)
// }

// for (producto of arrayListaProductos)
// {
//     console.log(producto.item)
// }



// productosEnPantalla= document.getElementsByClassName("product-card");



// function seleccionarItem()
// {
//         console.log (productoSeleccionado)
// }





