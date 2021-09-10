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
  
      response.json().then(function(data) {
        console.log(data);

        alert(data.price)
  
      });
    }
  ).catch(
    function(error) {
      console.log('Fetch Error :-S', err);
    }
  )
}
