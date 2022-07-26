
// NAVBAR LOGIC HERE 

function ProductList() {
  var ProductList = document.getElementById("proudctsList");
  var servicesList = document.getElementById("servicesList");
  var foodList = document.getElementById("foodList");

  
    if (ProductList.style.display = "none") {
      ProductList.style.display = "block";
      servicesList.style.display = "none";
      foodList.style.display = "none";


      
    } else {
      ProductList.style.display = "none";
    }
};


function ServiceList() {
  var servicesList = document.getElementById("servicesList");
  var ProductList = document.getElementById("proudctsList");
  var foodList = document.getElementById("foodList");

  
    if (servicesList.style.display = "none") {
      servicesList.style.display = "block";

      ProductList.style.display = "none";
      foodList.style.display = "none";

        
    } else {
      servicesList.style.display = "none";
    }
};


function foodList() {
  var servicesList = document.getElementById("servicesList");
  var ProductList = document.getElementById("proudctsList");
  var foodList = document.getElementById("foodList");
  
    if (foodList.style.display = "none") {
      foodList.style.display = "block";

      ProductList.style.display = "none";
      servicesList.style.display = "none";

        
    } else {
      foodList.style.display = "none";
    }
}
  
function hideAll() {
  var servicesList = document.getElementById("servicesList");
  var ProductList = document.getElementById("proudctsList");
  var foodList = document.getElementById("foodList");

    if (servicesList.style.display == "block" || ProductList.style.display == "block" || foodList.style.display == "block")  {
    foodList.style.display = "none";

    servicesList.style.display = "none";
      
    ProductList.style.display = "none";

      
    } else {
     
    
  }



}

// SCROLLING BAR OF IMAGES HERE 
var AllCategories = document.getElementById('AllCategories');
function scrollWinRight() {
  AllCategories.scrollBy(-1400, 0);
  console.log('Right');
}
function scrollWinMiddle() {
  AllCategories.scrollBy(300 ,-300);
  console.log('Middle');
}
function scrollWinleft() {
  AllCategories.scrollBy(1400, 0);
  console.log('Left');

}