import ToDoItem from "./ToDoItem";

const ToDoList = ({ data, removeToDo, changeStatus }) => {
  return (
    <div className="toDoContainer">
      {
        data.map(toDo => 
          <ToDoItem
            item={toDo}
            key={toDo.id}
            removeToDo={removeToDo}
            changeStatus={changeStatus}
          />
        )
      }
    </div>
  );
}
 
export default ToDoList;