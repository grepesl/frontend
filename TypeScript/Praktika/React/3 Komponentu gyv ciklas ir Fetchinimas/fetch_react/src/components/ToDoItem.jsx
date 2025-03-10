import { useEffect } from "react";

const ToDoItem = ({ item, removeToDo, changeStatus }) => {

  useEffect(() => {
    console.log('component did mount', item);
    
    return () => {
      console.log('component will unmount', item);
    }
  }, []);

  return (
    <div className="toDoItem">
      <p onClick={() => changeStatus(item.id)}>
        Is completed: {item.isCompleted ? 'Yes' : 'No'}
      </p>
      <h3>{item.name}</h3>
      <button
        onClick={() => removeToDo(item.id)}
      >Delete</button>
    </div>
  );
}
 
export default ToDoItem;