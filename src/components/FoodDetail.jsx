import { useEffect, useState } from "react";
import styles from "../module/foodDetail.module.css";
import Iconimage from "../assets/image/recipe.png";
export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "your-api-key-here"; //Add your spoonacular Api key

  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const response = await fetch(`${URL}?&apiKey=${API_KEY}`);
        const answer = await response.json();
        setFood(answer);
        console.log(answer);
      } catch (error) {
        console.error("Error fetching food details:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodDetail();
  }, [foodId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!food) {
    return <p>No food data found.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.topheader}>
          <h3 className={styles.title}>{food.title}</h3>
          <img
            src={food.image}
            alt={food.title}
            className={styles.recipeImage}
          />
        </div>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥦 Vegan " : "🥩 Non-Vegan"}</strong>
          </span>
          <span>
            <strong>
              {food.Vegetarian ? "🥦 Vegetarian " : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 {food.servings}</strong>
          </span>
        </div>
        <div className={styles.price}>
          <span>
            <strong>
              Price per serving: {Math.round(food.pricePerServing / 10)} $
            </strong>
          </span>
        </div>
        <div className={styles.instruction}>
          <h4>Ingridents</h4>
        </div>
        {/* starts here  */}
        {food.extendedIngredients.map((item) => (
          <div className={styles.ingredientContainer}>
            <div className={styles.ingredient}>
              <div className={styles.ingredientImage}>
                <img
                  src={
                    `https://img.spoonacular.com/ingredients_100x100/` +
                    item.image
                  }
                  alt=""
                  className={styles.imageDetail}
                />
              </div>

              <div className={styles.itemDetail}>
                <div>
                  <span>
                    <strong>{item.name}</strong>
                  </span>
                  <span>
                    <strong>{item.unit}</strong>
                  </span>
                  <span>
                    <strong>{item.original}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ends here  */}
        <div className={styles.instruction}>
          <h4>Instructions</h4>
        </div>
        <div className={styles.recipeinstractionList}>
          <ol>
            {food.analyzedInstructions?.[0]?.steps.map((list, index) => (
              <li key={index}>{list.step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
