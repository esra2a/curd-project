var productNameInp = document.getElementById('productName');
var prodctPriceInp = document.getElementById('productPrice');
var productCategoryInp = document.getElementById('productCategory');
var productDescInp = document.getElementById('productDesc');
var upBtn = document.getElementById('mainBtn');
var temp;
var mood = 'addProduct'

var productContainer;

if (localStorage.getItem('ourProduct') != null) {
    productContainer = JSON.parse(localStorage.getItem('ourProduct'));
    displayDate();
}
else {
    productContainer = [];
}
function workProject(){
    if(mood=='addProduct'){
        addProduct() ;
    }
    else if(mood== 'Update')
    {
for (var i =0;  i<productContainer.length;i++) {
    productContainer[temp]=product;
    productContainer.push(product);       
}
      
      
       }
     
}

    function addProduct() {
   
        var porduct = {
            name: productNameInp.value,
            price: prodctPriceInp.value,
            cat: productCategoryInp.value,
            desc: productDescInp.value,
        }
            productContainer.push(porduct);
            localStorage.setItem('ourProduct', JSON.stringify(productContainer));
            displayDate()
            clearForm();
       
     
    }
 



    


function clearForm() {

    productNameInp.value = '';
    prodctPriceInp.value = '';
    productCategoryInp.value = '';
    productDescInp.value = '';

}

function displayDate() {
    var cartoona = ``


    for (var i = 0; i < productContainer.length; i++) {
        cartoona += `<tr> 
        <td>${i}</td>

        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].cat}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="  updateProduct(${i})"  class=" btn btn-outline-warning">Update</button></td>

        <td> <button  onclick=" deletProduct(${i})" class=" btn btn-outline-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}

function deletProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('ourProduct', JSON.stringify(productContainer));
    displayDate();


}
function searchProduct(term) {
    var cartoona = ``
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            cartoona += `<tr> 
        <td>${i}</td>

        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].cat}</td>
        <td>${productContainer[i].desc}</td>
        <td><button  onclick=" updateProduct(${i})" class=" btn btn-outline-warning">Update</button></td>

        <td> <button  onclick=" deletProduct(${i})" class=" btn btn-outline-danger">Delete</button></td>
        </tr>`
        }

    }
    document.getElementById('tableBody').innerHTML = cartoona;

}
function updateProduct(x) {
    productNameInp.value = productContainer[x].name;
    prodctPriceInp.value = productContainer[x].price;
    productCategoryInp.value = productContainer[x].cat;
    productDescInp.value = productContainer[x].desc;
    upBtn.innerHTML = 'Update';
    x=temp;
    mood='Update';


}
