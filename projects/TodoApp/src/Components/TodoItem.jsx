import "../App.css";
import styles from "./TodoItem.module.css";

const TodoItem = ({ taskName, taskDate }) => {
  return (
    <div className="container text-center">
      <div className={`row row-cols-3 ${styles.listContainer}`}>
        <div className={`${styles.taskInputs} col-4`}>{taskName}</div>
        <div className={`${styles.taskInputs} col-4`}>{taskDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger delBtn">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
