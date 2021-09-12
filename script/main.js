const API_URL = 'http://localhost:3000/api/teddies';



function getProductList() {
    return fetch(API_URL + '/');
}

function getProductById(productId) {
    return fetch(API_URL + '/' + productId);
}

function formatPrice(rawPrice) {
    let priceChars = rawPrice.toString().split('');
    let price = priceChars.slice(0,-2).join('') + ',' + priceChars.slice(-2).join('')
    return `${price} €`;
}
