import { useEffect, useState } from "react";
import style from "../module/form.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "your-api-key-here";//Add your spoonacular Api key
export default function Form({ foodData, setFoodData }) {
  const [recipe, setRecipe] = useState("pizza");

  useEffect(() => {
    async function Request() {
      const response = await fetch(`${URL}?query=${recipe}&apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
      
    }
    Request();
  }, [recipe]);

  return (
    <div className={style.container}>
      <input
        className={style.modrenInput}
        onChange={(e) => setRecipe(e.target.value)}
        type="text"
        placeholder="enter the food recipe"
        value={recipe}
      />
    </div>
  );
}
