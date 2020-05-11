import React from 'react';

const TodoForm = (props) => {
  // Constructor with state
//   const [item, setItem] = useState('');

  const handleChanges = e => {
    // update state with each keystroke
    props.setItem(
      e.target.value
    );
    console.log(props.item)
  };

  // class property to submit form
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//     props.addTask(item);
//     setItem({
//       item: ''
//     });
//   };

    return (
      <form onSubmit={props.addTask}>
        <input
          type="text"
          name="item"
          value={props.item}
          placeholder= " ...to-do"
          onChange={handleChanges}
        />
        <button>Add to-do</button>
      </form>
    );
}

export default TodoForm;