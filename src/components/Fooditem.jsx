import style from "../module/fooditem.module.css";

export default function Fooditem({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <div key={food.id} className={style.continer}>
          <img src={food.image} className={style.recipeImage} />
          <p className={style.foodTitle}>{food.title}</p>

          <div className={style.buttonContainer}>
            <button
              onClick={() => {
                setFoodId(food.id);
              }}
              className={style.buttonRecipe}
            >
              view recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
