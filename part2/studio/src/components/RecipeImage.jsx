import recipedata from "./recipe.json";
import "./styling.css";
//import recipe from "./recipe.json";
function RecipeImage() {
  return (
    <img
      src={recipedata[0].recipeImage}
      alt={recipedata[0].name}
      className="recipeImage"
    />
  );
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
