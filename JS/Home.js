


// draw products :
let allproductsDOM=document.querySelector('.all-products');
let CartProductMenu=document.querySelector('.cart-products')
let catsProductsDOM=document.querySelector('.chosed-items');
let badgeDOM=document.querySelector('.badge');
let shopCartDOM=document.querySelector('.shopCart');
//all data :
let products=productsDB;


let drawProductsUI;
(drawProductsUI = function(products=[]) {
       let productsUI=products.map((item)=>{
           return `
           
        <div class="product-item">
           <div class="product">
               <img src="${item.imageUrl}" draggable="false">
           </div>
           <div class="product-desc">
               <h2 onclick='saveItemData(${item.id})'>${item.title}</h2>
               <p>${item.desc}</p>
               <p>${item.type}</p>
           </div>
           <div class="product-actions">
               <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
               <i class="${item.licked == true  ? "fa fa-heart fa-2x favourite" : "far fa-heart fa-2x favourite2"} " onclick="addToFavourite(${item.id})" ></i>

           </div>
       </div>
            `
       })

    allproductsDOM.innerHTML=productsUI.join('');// join to delete the , between arrays
})(JSON.parse(localStorage.getItem("products")) || products);


let arrayOfAddedItems=localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : []//adding in local storage :


  //check if we already had items :
  if(arrayOfAddedItems){
    arrayOfAddedItems.map(item=>{
        catsProductsDOM.innerHTML+=`<p> ${item.title}- QTY:${item.quantity}</p>`; 
    });
    badgeDOM.style.display="block";
    badgeDOM.innerHTML=arrayOfAddedItems.length;
  }

// add to cart :

function addedToCart(id){
    let products=JSON.parse(localStorage.getItem('products')) || products ; // add also my own products
    let product=products.find((item)=> item.id===id);
    let isProductInCart=arrayOfAddedItems.some(i=> i.id===product.id); // some return true or false :
if(isProductInCart){
   arrayOfAddedItems=arrayOfAddedItems.map(p=>{
       if(p.id === product.id)
       p.quantity+=1
       return p;
   })
}else{
    arrayOfAddedItems.push(product);
}
catsProductsDOM.innerHTML=""; //solution of repetiton
arrayOfAddedItems.forEach((item)=> {catsProductsDOM.innerHTML+=`<p> ${item.title} - QTY:${item.quantity} </p>`; });
    

// save data :
localStorage.setItem('productsInCart',JSON.stringify(arrayOfAddedItems)); //we used JSON cause local storage accept only strings
    
// calcul de nombre des éléments :
let cartProductLength=document.querySelectorAll('.chosed-items p');
badgeDOM.style.display="block";
badgeDOM.innerHTML=cartProductLength.length;

}




//check the user logged id or not :
function checkUser(){
    if(localStorage.getItem('username')){
        window.location="CARTPRODUCTS.html";
    } else{
        window.location="LOGIN.html";
    }
}

// shop cart click : !!!!!!!!!!!!!
function shopcartMenu(){
    if(catsProductsDOM.innerHTML!=''){
        if(CartProductMenu.style.display == "block"){
        CartProductMenu.style.display="none";
        }
        else{
            CartProductMenu.style.display="block";
        }
    }
}
shopCartDOM.addEventListener('click',shopcartMenu);


// save data item for details page :
function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location="CartDetailes.html";
}

//add to favourite :
let favourite=[];
function addToFavourite(id){

    //filtring :
    function getUniqueArr(array,filterType){ 
        let unique=array
        .map(item=>item[filterType])
        .map((item,i,finalArray)=>finalArray.indexOf(item)===i && i)
        .filter((item)=>array[item])
        .map((item)=>array[item]); // && stand for if condition :
        return unique;
    }
    
    let chosedItem=products.find((item)=>item.id===id);
    chosedItem.licked=true;
    favourite=[...favourite,chosedItem];
    let uniqueProduct=getUniqueArr(favourite,"id"); //unique item in cart :
    localStorage.setItem("productsInfavourite",JSON.stringify(uniqueProduct));
    products.map((item)=> {
      if(item.id===chosedItem.id){
        item.licked=true;
    }
})
   localStorage.setItem('products',JSON.stringify(products));
   drawProductsUI(products);
       
}
