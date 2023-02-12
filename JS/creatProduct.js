// VARIABLES :
let productNmaeDom=document.querySelector('.product-name');
let productDescDom=document.querySelector('.product-desc');
let productSelectDom=document.querySelector('#type');
let producCreatFormDom=document.querySelector('.AddProduct');
let productBtnDom=document.querySelector('.sub-btn');
let productTypeValue //type of product

// EVENTS :
productSelectDom.addEventListener('change',getTypeValue);
producCreatFormDom.addEventListener('submit',creatProduct);


// FUNCTION get type :
function getTypeValue(e){
    productTypeValue = e.target.value;
}
// FUNCTION creat product :   NOT WORKING !!!!!!!!!
function creatProduct(e){
    e.prevnetDefault();
    let allProducts=JSON.parse(localStorage.getItem("products"));
    let nameValue=productNmaeDom.value;
    let descValue=productDescDom.value;

    let obj={
        id: allProducts ? allProducts.length + 1 : 1,
        title: nameValue,
        desc:descValue,
        imageUrl:productImg,
        type:productTypeValue,
        quantity: 1, 
    };

    let newProducts = allProducts ? [...allProducts,obj] : [obj];
    localStorage.setItem("products",JSON.stringify(newProducts));
}


// UPLOAD IMAGE : NOT WORKING !!!!!!!!!!!
let uploadImgDOM=document.querySelector('.uploadImg-file')
let productImg

uploadImgDOM.addEventListener('change',uploadImg)
function uploadImg(){
    let file=this.files[0] // this retuen for event

    let types=["image/jpeg","image/png"]
    if(types.indexOf(file.type) ==-1){
        alert("type not supported")
        return;
    }
    if(file.size> 2*1024*1024){
        alert("size is so big")
        return;
    }

   // productImg=URL.createObjectURL(file) // link
}

// to use image in local storage we should transform it into base 64 :
getImgBase64(file)
function getImgBase64(){
    let reader = new FileReader // object in js
    reader.readAsDataURL(file)
    reader.onload=function(){
    productImg=reader.result //linl in base 64
    };
    reader.onerror=function(){
        alert('error !!')
    }
}