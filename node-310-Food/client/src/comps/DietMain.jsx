import { useEffect } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";

const DietMain = () => {
  // useState 와 useEffect
  const [foods, setFoods] = useState([]);

  // 데이터를 fetch 할때 사용할 함수 선언하기
  const fetchFood = async () => {
    const res = await fetch("/food/selectAll");
    if (res.ok) {
      return await res.json();
    }
  };

  // DietMain 컴포넌트가 rendering 될때 실행하여
  // fetchFood() 함수를 호출하고
  // 결과를 foods state 변수에 세팅하기
  useEffect(() => {
    fetchFood().then((result) => {
      setFoods(result);
    });
  }, []);
  return (
    <>
      <DietList />
      <DietInput />
    </>
  );
};

// 다른 컴포넌트에서 import 하기 위하여
// 함수를 export 해주기
export default DietMain;
