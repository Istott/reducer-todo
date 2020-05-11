import React, {useState, useReducer, useEffect} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          task: action.payload.task,
          id: Date.now(),
          completed: false
        }
      ]
    case "TOGGLE_COMPLETED":
      return 
    default:
      return state;
  }
};

const initialState = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Learn about Reducers',
      id: 1528817084358,
      completed: false
    }
  ]

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');

  useEffect(()=> {
    console.log(state)
  }, [])
  
  const clearCompleted = () => {
    dispatch ({
      tasks: state.filter(el =>{
        return (el.completed !== true)
      })
    })

  };
 
  const toggleCompleted = clickedItemId => {
    dispatch({
      type: 'TOGGLE_COMPLETED', 
    })

    state.map(item => {
      if (item.id === clickedItemId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  };

  const addTask = event => {
    event.preventDefault();

    dispatch({ 
      type: "ADD_TASK", 
      payload: {
        task: item 
      }
    });
    console.log(state);
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        
        <div className='header'>
          <h2>To-Do List</h2>
          <TodoForm 
          item={item}
          setItem={setItem}
          addTask={addTask}
        />
        </div>
        <TodoList
          tasks={state}
          clearCompleted={clearCompleted}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </div>
      
  );

}

export default App;