import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem taskName={item.taskName} taskDate={item.taskDate} />
      ))}
    </div>
  );
};
export default TodoItems;
