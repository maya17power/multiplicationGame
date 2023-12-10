
window.onload = function(){
    let myRandomNumber = document.getElementById("randomNumber");
    let myProduct = document.getElementById("product");
    console.log("page loaded");
    document.getElementById("startButton").onclick = function(){
      
      console.log("START button clicked");
      
      let rMultiplier = Math.floor(Math.random() * 10);
      let rMultiplicand = Math.floor(Math.random() * 10);
      let product = rMultiplier * rMultiplicand;
      console.log(rMultiplier + "x" + rMultiplicand);
      myRandomNumber.innerHTML = rMultiplier + "x" + rMultiplicand;
      myProduct.innerHTML = product;
    };
    
  };
  