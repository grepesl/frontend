import { useState, useEffect } from 'react';
import './App.css';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {

  const [formInput, setFormInput] = useState('');
  const [toDos, setToDos] = useState('');

  const addNewTask = (newTask) => {
    setToDos([...toDos, newTask]);
    fetch('http://localhost:8080/todos', {
      method: "POST",
      headers: {
        'Content-Type':"application/json"
      },
      body: JSON.stringify(newTask)
    });
  }
  const removeToDo = (id) => {
    setToDos(toDos.filter(el => el.id !== id));
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE"
    });
  }
  const changeStatus = (id) => {
    console.log('keičiam statusą elemto su id:', id);
    // set => fetch
    setToDos(toDos.map(el => {
      if(el.id === id){
        fetch(`http://localhost:8080/todos/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ isCompleted: !el.isCompleted })
        });
        return {
          // ...el, grąžina:
          // id: el.id,
          // name: el.name,
          // isCompleted: el.isCompleted,
          ...el,
          isCompleted: !el.isCompleted
        }
      } else { 
        return el;
      }
    }));
  }

  // component did mount - veiksmai vykdysis vieną vienintelį kartą kai komponentas yra užkraunamas(ne update'inamas) į ekraną.
  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then(res => res.json())
      .then(data => {
        setToDos(data);
      });
  }, []);

  // component did update - veiksmai atliekami kaskart įvykus pakitimams dependencies nurodytose reikšmėse
  useEffect(() => {
    console.log('pakito toDos', toDos);
  }, [toDos]);
  // useEffect(() => {
  //   console.log('pakito form input reikšmė', formInput);
  // }, [formInput]);
  
  return (
    <>
      <ToDoForm 
        formInput={formInput}
        setFormInput={setFormInput}
        addNewTask={addNewTask}
      />
      {
        toDos && 
        <ToDoList
          data={toDos}
          removeToDo={removeToDo}
          changeStatus={changeStatus}
        />
      }
    </>
  )
}

export default App;