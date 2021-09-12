const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

if (productId !== null) {
  getProductById(productId).then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
  
      response.json().then(function(product) {

        let productImageDiv = document.getElementById('product-image');
        let image = document.createElement("img");
        image.src = product.imageUrl;
        image.classList.add("img-fluid");
        productImageDiv.appendChild(image);
        
        let productNameDiv = document.getElementById('product-name');
        productNameDiv.innerText = product.name;

        let productPriceDiv = document.getElementById('product-price');
        productPriceDiv.innerText = formatPrice(product.price);

        let productColorsSelect = document.getElementById('product-color-select');
        product.colors.forEach(color => {
          var opt = document.createElement("option");
          opt.text = color;
          productColorsSelect.add(opt);
        });

        let productDescriptionDiv = document.getElementById('product-description');
        productDescriptionDiv.innerText = product.description;
  
      });
    }
  ).catch(
    function(error) {
      console.log('Fetch Error :-S', err);
    }
  )
}