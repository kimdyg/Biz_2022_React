import { useState } from "react";
import uuid from "react-uuid";
import TodoList from "./TodoList";

const TodoMain = () => {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = {
        b_id: uuid(), // uuid 를 사용하여 Bucket PK 생성
        isDone: false, // 중요도를 표시하는 데이터로 사용
        b_todo: e.target.value,
      };

      setTodoList([...todoList, todo]);
      e.target.value = "";
      console.table(todoList);
    }
  }; // end onKeyDown
  const [todoList, setTodoList] = useState(() => {
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });

  const todo_delete = (id) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.b_id !== id;
    });
    setTodoList(todoRemoveList);
  }; // end bucket_delete
  const todo_flag_toggle = (id) => {
    const todoBody = todoList.map((todo) => {
      return todo;
    }); // end map
    setTodoList(todoBody);
  }; // end bucket_flag_toggle

  const todo_complete = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.b_id === id) {
        const done = !todo.isDone;
        return { ...todo, isDone: done };
      }
      return todo;
    });
    setTodoList(todoBody);
  }; // end bucket_complete
  const functions = {
    todo_delete,
    todo_complete,
    todo_flag_toggle,
  };

  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="할일에 추가할 내용을 입력하세요"
          className="w3-input w3-border w3-hover-gray w3-round"
        />
      </div>
      <div>
        <TodoList todoList={todoList} functions={functions} />
      </div>
    </>
  );
};

export default TodoMain;
