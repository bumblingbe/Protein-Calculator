//FOOD / PROTEIN CALCULATOR
////define functions
function handleSearch(event) {
  event.preventDefault;
  let foodTypeInputElement = document.querySelector("#food-type-input");
  let foodTypeInputValue = foodTypeInputElement.value;
  alert(`food type: ${foodTypeInputValue}`);
  let gramsProteinInputElement = document.querySelector("#grams-protein-input");
  let gramsProteinInputValue = gramsProteinInputElement.value;
  alert(`grams of protein: ${gramsProteinInputValue}`);
}

////on search, catch input data
let searchButton = document.querySelector("#food-type-form");
searchButton.addEventListener("submit", handleSearch);
////replace food name
////get food % protein
////calculate g of food type
////replace g of food type
////replace food % protein
