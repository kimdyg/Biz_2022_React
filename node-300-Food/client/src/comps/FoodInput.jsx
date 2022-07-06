import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import moment from "moment";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonBuck = await response.json();
    setFoodList(jsonBuck);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const onClick = () => {
    const f_food = document.querySelector("input[name='f_food']");
    const f_eat = document.querySelector("input[name='f_eat']");
    const f_cal = document.querySelector("input[name='f_cal']");
    const food = {
      f_date: moment().format("YYYY[-]MM[-]DD"),
      f_food: f_food.value,
      f_eat: f_eat.value,
      f_cal: f_cal.value,
      f_scal: f_eat.value * f_cal.value,
    };

    // fetch 를 사용하여 POST 로 서버로 데이터보내기 위한 설정
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };

    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };

  return (
    <>
      <input name="f_food" placeholder="foodname" className="w3-input" />
      <input name="f_eat" placeholder="eat" className="w3-input" />
      <input name="f_cal" placeholder="칼로리" className="w3-input" />
      <button onClick={onClick}>저장</button>
      <table width="100%">
        <tr>
          <th>날짜</th>
          <th>음식명</th>
          <th>섭취횟수</th>
          <th>칼로리</th>
          <th>총 칼로리</th>
        </tr>
      </table>
      <FoodList foodList={foodList} />
    </>
  );
};

export default FoodInput;
