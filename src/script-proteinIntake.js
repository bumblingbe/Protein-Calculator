//RECOMMENDED PROTEIN INTAKE

//define functions
function calculateRatioKgToGBasedOnGender(event) {
  event.preventDefault();
  ////only accept male/female as 'gender'
  let genderInputElement = document.querySelector("#gender-input");
  let genderInputValue = genderInputElement.value;
  alert(`gender is ${genderInputValue}`);
  if (genderInputValue == "female") {
    ratioKgToG = 0.75;
    //0.75 grams of protein for each kilogram of body weight for women 19-70 years of age
  } else if (genderInputValue == "male") {
    ratioKgToG = 0.84;
    //0.84 grams of protein for each kilogram of body weight for men 19-70 years of age
  } else {
    //////if not male/female, prompt to re-enter data
    alert("Please enter 'male' or 'female'. (See note below.)*");
  }
  alert(`ratioKgToG is ${ratioKgToG}`);
  calculateRecommendedDailyProteinIntake(ratioKgToG);
}

function calculateRecommendedDailyProteinIntake(ratioKgToG) {
  ////calculate recommended daily intake
  let weightInKgElement = document.querySelector("#body-weight-input");
  let weightInKg = weightInKgElement.value;
  let recommendedDailyIntake = weightInKg * ratioKgToG;

  updateDailyProteinIntake(recommendedDailyIntake);
}

function updateDailyProteinIntake(recommendedDailyIntake) {
  ////replace daily protein intake
  let recommendedDailyProteinIntakeResponseElement = document.querySelector(
    "#recommended-daily-protein-intake-response"
  );
  recommendedDailyProteinIntakeResponseElement.innerHTML = `<div>
          Recommended daily protein intake, based on
          <a
            href="https://dietitiansaustralia.org.au/health-advice/protein"
            target="_blank"
            >advice from Dieticians Australia</a
          >:
        </div>
        <div class="searchResult" id="recommended-daily-intake">${Math.round(
          recommendedDailyIntake
        )}g</div>`;
}

let form = document.querySelector("#recommended-protein-intake-form");
////on search, catch input data
form.addEventListener("submit", calculateRatioKgToGBasedOnGender);
