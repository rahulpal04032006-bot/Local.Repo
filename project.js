const products = [

{
id:1,
name:"Laptop",
price:50000,
category:"Electronics",
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Mobile",
price:25000,
category:"Electronics",
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"T Shirt",
price:1000,
category:"Fashion",
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Shoes",
price:3000,
category:"Shoes",
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Headphone",
price:2000,
category:"Electronics",
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Jeans",
price:1500,
category:"Fashion",
image:"https://picsum.photos/300?6"
}

];

let cart = [];

function displayProducts(productList){

let container =
document.getElementById("productContainer");

container.innerHTML="";

productList.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.category}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

}

displayProducts(products);

function addToCart(id){

let product =
products.find(item=>item.id===id);

cart.push(product);

updateCart();

}

function updateCart(){

let cartItems =
document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

${item.name} - ₹${item.price}

<button onclick="removeCart(${index})">
Remove
</button>

</div>

`;

});

document.getElementById("totalPrice")
.innerText = total;

document.getElementById("cartCount")
.innerText = cart.length;

}

function removeCart(index){

cart.splice(index,1);

updateCart();

}

function filterProducts(category){

if(category==="All")
displayProducts(products);

else{

let filtered =
products.filter(
item=>item.category===category
);

displayProducts(filtered);

}

}

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);

});

function checkout(){

if(cart.length===0){

alert("Cart Empty");

return;

}

alert("Order Placed Successfully");

cart=[];

updateCart();

}