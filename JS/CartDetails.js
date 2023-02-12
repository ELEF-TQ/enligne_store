let products=JSON.parse(localStorage.getItem('productsData'));
let productID=localStorage.getItem('productId');
let itemDOM=document.querySelector('.item-details');
let productDetailsItem=products.find(item=>item.id == productID); //clicked item

itemDOM.innerHTML=`
               <div class="first">
               <img src="${productDetailsItem.imageUrl}">
               </div>
               <div class="sellers">
                <h2 class="title">Title : ${productDetailsItem.title}</h2>
                <h2 class="price">price : 100$</h2>
               <img src="../TEMPLATE 2/Template_2_images/client1.png">
               <img src="../TEMPLATE 2/Template_2_images/client2.png">
               <img src="../TEMPLATE 2/Template_2_images/client3.png">
               <img src="../TEMPLATE 2/Template_2_images/client4.png">
               <img src="../TEMPLATE 2/Template_2_images/client5.png">
               <img src="../TEMPLATE 2/Template_2_images/client6.png">
               </div>
`