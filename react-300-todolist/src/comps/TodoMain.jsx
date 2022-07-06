import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import moment from "moment";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  const insert_todo = (content) => {
    // 여기는 TodoInput 이 전달해준 todo 를 todoList에 추가하는 곳
    const todo = {
      t_id: "",
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      content: content,
      t_e_date: "",
    };

    const todoBody = [todo, ...todoList];
    setTodoList(todoBody);
  };
  return (
    <div className="w3-container w3-margin">
      {/* TodoInput 야 insert_todo 함수를 너에게 보낸다 */}
      <TodoInput insert_todo={insert_todo} />
      {/* TodoList 야 todoList 데이터를 todoList 변수에 담아 보낸다 */}
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
