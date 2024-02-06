//FOOD / PROTEIN CALCULATOR
////define global variables
var percentageProtein = 0;
var foodName = "";
var gramsProteinInputValue = 0;

////define functions
function handleSearch(event) {
  event.preventDefault();

  //make/update variable which holds requested food type
  let foodTypeInputElement = document.querySelector("#food-type-input");
  let foodTypeInputValue = foodTypeInputElement.value;

  //make/update variable which holds requested g of protein
  let gramsProteinInputElement = document.querySelector("#grams-protein-input");
  gramsProteinInputValue = gramsProteinInputElement.value;
  gramsProteinInputValue = gramsProteinInputValue.trim().toLowerCase();

  getData(foodTypeInputValue);
}

function getData(foodTypeInputValue) {
  //let apiKey = "pn91AQvkUVjb+8DpE09vMg==LVj3tCiHQYUq89OJ";
  //let url = `https://api.calorieninjas.com/v1/nutrition?query=100g ${foodTypeInputValue}`;
  //let headers = `{'X-Api-Key': '${apiKey}'}`;
  //let contentType = "application/json";
  //NEED TO MAKE THIS MORE SPECIFIC DEPENDING ON API INVOLVED
  //axios.get(url).then(retrievePercentageProteinAndFoodName);
  foodTypeInputValue = foodTypeInputValue.replaceAll(" ", "+");
  let url = `https://api.calorieninjas.com/v1/nutrition?query=100g+${foodTypeInputValue}`;
  axios
    .get(url, {
      headers: {
        "X-Api-Key": "pn91AQvkUVjb+8DpE09vMg==LVj3tCiHQYUq89OJ",
        "Content-Type": "application/json",
      },
    })
    .then(retrievePercentageProteinAndFoodName);
}

function retrievePercentageProteinAndFoodName(response) {
  percentageProtein = response.data.items[0].protein_g;
  foodName = response.data.items[0].name;

  updateFoodName(foodName);
  updateFoodNumbers(percentageProtein);
}

function updateFoodName(foodName) {
  let foodNameElement = document.querySelector("#food-name");
  foodNameElement.innerHTML = foodName;
}

function updateFoodNumbers(percentageProtein) {
  //update food weight
  let foodWeightValue = (gramsProteinInputValue / percentageProtein) * 100;
  let foodWeightElement = document.querySelector("#food-weight");
  foodWeightElement.innerHTML = `${Math.round(foodWeightValue)}g`;

  //update percentage protein
  let percentageProteinElement = document.querySelector("#percent-protein");
  percentageProteinElement.innerHTML = `${Math.round(
    percentageProtein
  )}%<br />protein`;
}

////on search, catch input data
let searchButton = document.querySelector("#food-type-form");
searchButton.addEventListener("submit", handleSearch);
////replace food name
////get food % protein
////calculate g of food type
////replace g of food type
////replace food % protein
