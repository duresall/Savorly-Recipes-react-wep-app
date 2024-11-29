import { useState } from "react";
import Form from "./Form";
import Fooditem from "./Fooditem";
import Nav from "./Nav";
import Container from "./Container";
import Innercontianer from "./InnerContainer";
import FoodDetail from "./FoodDetail";

export default function Home() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("642583");
  return (
    <div>
      <Nav />
      <Form foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <Innercontianer>
          <Fooditem foodData={foodData} setFoodId={setFoodId} />
        </Innercontianer>
        <Innercontianer>
          <FoodDetail foodId={foodId} setFoodId={setFoodId} />
        </Innercontianer>
      </Container>
    </div>
  );
}
