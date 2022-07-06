import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <nav class="main-nav">
      <Link to="/">Home</Link>
      <Link to="/todo">지금 해야 할일</Link>
      <Link to="/bucket">나의 버킷 리스트</Link>
      <input></input>
    </nav>
  );
};
export default Navi;
