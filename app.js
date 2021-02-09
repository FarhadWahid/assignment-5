const searchText = () => {
    const foodText = document.getElementById('inputValue').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))


}
const displayFoods = meal => {
    const foodContainer = document.getElementById('food-container');
    if (meal == null) {
        alert('sorry ! is not available now')
    } else {
        meal.forEach(meal => {
            const foodDiv = document.createElement('div');
            foodDiv.className = 'foodName';
            foodDiv.innerHTML = `
  
      <div class="meal">
      <img onClick="mealDetails('${meal.idMeal}')"class="img" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
      <div class="meal-info" data-mealID="${meal.idMeal}">
      <h3>${meal.strMeal}</h3></div>
  </div>
      `;
            foodContainer.appendChild(foodDiv);

        })
    }


}

const mealDetails = strMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => mealsInformation(data.meals[0]))

}
const mealsInformation = foodName => {
    console.log(foodName);
    const foodDiv = document.getElementById('foodDetails');
    foodDiv.innerHTML = `
    <div class="detailsHading col-md-12">
    <img class="imgHading" src="${foodName.strMealThumb}" alt="${foodName.strMeal}"/>
    <h1>${foodName.strMeal}</h1>
  </div>
    <div class="details">
    
    <br>
    Ingredient:
       <div class="liStyle">
       <li>${foodName.strIngredient1}</li>
       <li>${foodName.strIngredient2}</li>
       <li>${foodName.strIngredient3}</li>
       <li>${foodName.strIngredient4}</li>
       <li>${foodName.strIngredient5}</li>
       <li>${foodName.strIngredient6}</li>
       <li>${foodName.strIngredient7}</li>
       <li>${foodName.strIngredient8}</li>
       <li>${foodName.strIngredient9}</li>
       <li>${foodName.strIngredient10}</li>
       <br>
  </div>
       <p class="instruction-unit">
       Instructions:
       <h4 class="Instructions">${foodName.strInstructions}</h4>
       
       </p>
       </div>
    `
}