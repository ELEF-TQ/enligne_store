let allproductsDOM=document.querySelector('.all-products');
let noProductsDOM=document.querySelector('.no-products');

function drawFavouriteProductsUI(allProducts=[]){
    let products=JSON.parse(localStorage.getItem('productsInfavourite')) || allProducts ;
    let productsUI=products.map((item)=>{
        return `
     <div class="product-item">
        <div class="product">
            <img src="${item.imageUrl}" draggable="false">
        </div>
        <div class="product-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</</p>
            <p>${item.type}</p>
        </div>
        <div class="product-actions">
            <button class="add-to-cart" onclick="FavouriteItemRemmove(${item.id})">Remove From Favourite</button>
        </div>
    </div>
         `;
    });
allproductsDOM.innerHTML=productsUI.join('');
}
drawFavouriteProductsUI();

//if ther's no products :
if(JSON.parse(localStorage.getItem('productsInfavourite')).length===0){
    noProductsDOM.innerHTML=`
    <section class="section-form">
    <h2>THER'S NO ITEMS</h2>
    </section> `
;
}

//removing items :
function FavouriteItemRemmove(id){
    if(localStorage.getItem('productsInfavourite')){
        let items=JSON.parse(localStorage.getItem('productsInfavourite'));
        let filtredItems=items.filter((item)=> item.id !== id); // return  item not clicked :
        localStorage.setItem('productsInfavourite',JSON.stringify(filtredItems));
        drawFavouriteProductsUI(filtredItems);  
    }

}