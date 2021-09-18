if (productId !== null) {
  getProductById(productId).then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
  
  

      function LignePanier (id, qte, prix)
      {
          this.idArticle = id;
          this.qteArticle = qte;
          this.prixArticle = prix;
          this.ajouterQte = function(qte)
          {
              this.qteArticle += qte;
          }
          this.getPrixLigne = function()
          {
              var resultat = this.prixArticle * this.qteArticle;
              return resultat;
          }
          this.getid = function() 
          {
              return this.idArticle;
          }
      }