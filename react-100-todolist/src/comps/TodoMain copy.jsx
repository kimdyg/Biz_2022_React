import { useEffect, useState } from "react";
import uuid from "react-uuid";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState(() => {
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });
  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

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

  const todo_delete = (id) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.b_id !== id;
    });
    setTodoList(todoRemoveList);
  }; // end bucket_delete
  const todo_flag_toggle = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.b_id === id) {
        const _temp_todo = { ...todo, b_flag: todo.b_flag + 1 };
        return _temp_todo;
      }

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
  /*   const todo_item_edit = (id, content) => {
    const todoBody = todoList.map((todo) => {
      if (todo.b_id === id) {
        const _temp_todo = { ...todo, b_todo: content };
        return _temp_todo;
      }
      return todo;
    });
    setTodoList(todoBody);
  }; */
  const functions = {
    todo_delete,
    //todo_flag_toggle,
    todo_complete,
    //todo_item_edit,
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
