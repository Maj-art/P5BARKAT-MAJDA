const API_URL = 'http://localhost:3000/api/teddies';



function getProductList() {
    return fetch(API_URL + '/');
}
