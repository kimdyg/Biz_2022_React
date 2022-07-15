import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList, functions } = props;
  const todoBody = todoList.map((todo) => {
    return <TodoItem item={todo} functions={functions} key={todo.b_id} />;
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>Todo=할일</th>
          <th>확마 지워뿔라</th>
        </tr>
      </thead>
      <tbody>{todoBody}</tbody>
    </table>
  );
}

export default TodoList;
