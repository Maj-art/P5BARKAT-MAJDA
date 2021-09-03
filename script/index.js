getProductList().then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
  
      response.json().then(function(data) {
        console.log(data);
        
        let productListDiv = document.getElementById('product-list');
  
        data.forEach(function(product) {
          let productContainerDiv = document.createElement("div");
          productContainerDiv.classList.add("product");
          productContainerDiv.classList.add("col-6");
          productContainerDiv.classList.add("py-3");
  
          let productDiv = document.createElement('div');
          productDiv.classList.add("card");
  
          let image = document.createElement("img");
          image.src = product.imageUrl;
          image.classList.add("card-img-top");
          productDiv.appendChild(image);
  
          let productDivBody = document.createElement('div');
          productDivBody.classList.add("card-body");
  
          let productTitle = document.createElement('h5');
          productTitle.classList.add("card-title");
          productTitle.innerText = product.name
          productDivBody.appendChild(productTitle);
          productDiv.appendChild(productDivBody);
  
          productContainerDiv.appendChild(productDiv);
          productListDiv.appendChild(productContainerDiv);
        })
  
      });
    }
    ).catch(
        function(error) {
          console.log('Fetch Error :-S', err);
        }
      )
      