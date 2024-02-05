//FOOD / PROTEIN CALCULATOR
////define global variables
var percentageProtein = 0;
var foodName = "";

////define functions
function handleSearch(event) {
  event.preventDefault();

  let foodTypeInputElement = document.querySelector("#food-type-input");
  let foodTypeInputValue = foodTypeInputElement.value;
  alert(`food type: ${foodTypeInputValue}`);

  let gramsProteinInputElement = document.querySelector("#grams-protein-input");
  let gramsProteinInputValue = gramsProteinInputElement.value;
  alert(`grams of protein: ${gramsProteinInputValue}`);

  getData(foodTypeInputValue);
}

function getData(foodTypeInputValue) {
  let url = `#`;
  //NEED TO MAKE THIS MORE SPECIFIC DEPENDING ON API INVOLVED
  axios.get(url).then(retrievePercentageProteinAndFoodName);
}

function retrievePercentageProteinAndFoodName(response) {
  percentageProtein = response.data;
  //NEED TO MAKE THIS MORE SPECIFIC DEPENDING ON API INVOLVED

  foodName = response.data;
  //NEED TO MAKE THIS MORE SPECIFIC DEPENDING ON API INVOLVED

  updateFoodName(foodName);
  updateFoodNumbers(percentageProtein);
}

function updateFoodName(foodName) {
  let foodNameElement = document.querySelector("#food-name");
  foodNameElement.innerHTML = foodName;
}

function updateFoodNumbers(percentageProtein) {
  let foodWeightValue = percentageProtein * gramsProteinInputValue;
  let foodWeightElement = document.querySelector("#food-weight");
  foodWeightElement.innerHTML = `${Math.round(foodWeightValue)}g`;
}

////on search, catch input data
let searchButton = document.querySelector("#food-type-form");
searchButton.addEventListener("submit", handleSearch);
////replace food name
////get food % protein
////calculate g of food type
////replace g of food type
////replace food % protein
