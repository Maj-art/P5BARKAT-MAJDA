let product = {
    id: "5be9c8541c9d440000665243",
    name: "Norbert",
    price: 2900,
    image: "images/teddy_1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

let product2 = {
    id: "5beaa8bf1c9d440000a57d94",
    name: "Arnold",
    price: 3900,
    image: "images/teddy_2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

let product3 = {
    id: "5beaaa8f1c9d440000a57d95",
    name: "Lenny and Carl",
    price: 5900,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "images/teddy_3.jpg"
}

let product4 = {
    id: "5beaabe91c9d440000a57d96",
    name: "Gustav",
    price: 4500,
    image: "images/teddy_4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

let product5 = {
    id: "5beaacd41c9d440000a57d97",
    name: "Garfunkel",
    price: 5500,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "images/teddy_5.jpg"
}

let products=[];
products.push(product,product2,product3,product4,product5);


products.forEach(prod=>
    listOfProducts+= `
      <tr class="text-center">
        <td>${prod.price}€</td>
        
      </tr>
      `   
  )
 
document.getElementById('productList').innerHTML = listOfProducts;
}
  
