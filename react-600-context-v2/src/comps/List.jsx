import Item from "./Item";
import AppContext from "../context/Context";
import { useContext } from "react";
import View from "./View";

// addrList 배열의 값을 표 형식으로 구현하기
const List = () => {
  /* 
  부모 Container 로부터 props로 전달받던 addrList state 배열을
  AppCon
  */

  const { addrList } = useContext(AppContext);
  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });

  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>{addrBody}</tbody>
      </table>
    </>
  );
};

export default List;
