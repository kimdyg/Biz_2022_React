function TodoItem(props) {
  const { item, functions } = props;
  const { todo_delete, todo_complete } = functions;

  return (
    <tr className={item.isDone ? "cancel" : ""}>
      <td onClick={() => todo_complete(item.b_id)}>{item.b_todo}</td>
      <td onClick={() => todo_delete(item.b_id)}>&times;</td>
    </tr>
  );
}

export default TodoItem;
