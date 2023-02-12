
let allproductsDOM=document.querySelector('.all-products');
let noProductsDOM=document.querySelector('.no-products');

function drawCartProductsUI(allProducts=[]){
    let products=JSON.parse(localStorage.getItem('productsInCart')) || allProducts ;
    let productsUI=products.map((item)=>{
        return `
     <div class="product-item">
        <div class="product">
            <img src="${item.imageUrl}" draggable="false">
        </div>
        <div class="product-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <p>${item.type}</p>
            <p>Quantity :<b>${item.quantity}</b></p>
        </div>
        <div class="product-actions">
            <button class="add-to-cart" onclick="cartItemRemmove(${item.id})">Remove item</button>
        </div>
    </div>
         `;
    });
allproductsDOM.innerHTML=productsUI.join('');
}
drawCartProductsUI();

//if ther's no products :
if(JSON.parse(localStorage.getItem('productsInCart')).length===0){
    noProductsDOM.innerHTML=`
    <section class="section-form">
    <h2>THER'S NO ITEMS</h2>
    </section> `
;
}

//removing items :
function cartItemRemmove(id){
    if(localStorage.getItem('productsInCart')){
        let items=JSON.parse(localStorage.getItem('productsInCart'));
        let filtredItems=items.filter((item)=> item.id !== id); // return  item not clicked :
        localStorage.setItem('productsInCart',JSON.stringify(filtredItems));
        drawCartProductsUI(filtredItems);  
    }

}