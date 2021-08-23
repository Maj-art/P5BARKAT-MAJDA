let product = {
    id: "5be9c8541c9d440000665243",
    name: "Norbert",
    price: 2900,
    image: "images/teddy_1.jpg",
    description: "Lorem ipsum dolor sit amet."
};

let product2 = {
    id: "5beaa8bf1c9d440000a57d94",
    name: "Arnold",
    price: 3900,
    image: "images/teddy_2.jpg",
    description: "Lorem ipsum dolor sit amet."
}

let product3 = {
    id: "5beaaa8f1c9d440000a57d95",
    name: "Lenny and Carl",
    price: 5900,
    description: "Lorem ipsum dolor sit amet.",
    image: "images/teddy_3.jpg"
}

let product4 = {
    id: "5beaabe91c9d440000a57d96",
    name: "Gustav",
    price: 4500,
    image: "images/teddy_4.jpg",
    description: "Lorem ipsum dolor sit amet."
}

let product5 = {
    id: "5beaacd41c9d440000a57d97",
    name: "Garfunkel",
    price: 5500,
    description: "Lorem ipsum dolor sit amet.",
    image: "images/teddy_5.jpg"
}

let products=[];
products.push(product,product2,product3,product4,product5);

function populateTableList(){
    let Productlist = '';
    
    products.forEach(prod =>
    Productlist +=`
    <tr class="text-center">
      <td> <img src=${prod.image} class="img-fluid img-thumbnail w-100"></td>
      <td class="w-25 align-middle">${prod.id}</td>
      <td class="w-15 align-middle">${prod.name}</td>
      <td class="w-25 align-middle">${prod.price}€</td>
      <td class="w-25 align-middle">${prod.description}</td>
      <td class="w-25 align-middle"><button class="btn btn-info">Select</button></td>
    </tr>
    `   
)

document.getElementById('productList').innerHTML = Productlist;
}