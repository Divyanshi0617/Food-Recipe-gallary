function showRecipe(food) {
let text = "";

if(food === "pizza") {
text = "Pizza Recipe: Dough, Sauce, Cheese, Vegetables. Bake for 15 minutes.";
}

else if(food === "burger") {
text = "Burger Recipe: Bun, Patty, Cheese, Lettuce. Grill patty and assemble.";
}

else if(food === "pasta") {
text = "Pasta Recipe: Boil pasta, add sauce, vegetables, mix well.";
}

document.getElementById("recipeText").innerText = text;
}
