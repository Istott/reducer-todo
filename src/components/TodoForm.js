import React from 'react';

const TodoForm = (props) => {

  const handleChanges = e => {
    // update state with each keystroke
    props.setItem(
      e.target.value
    );
    console.log(props.item)
  };

    return (
      <form onSubmit={props.addTask}>
        <input
          type="text"
          name="item"
          value={props.item}
          placeholder= " ...to-do"
          onChange={handleChanges}
        />
        <button>Add To List</button>
      </form>
    );
}

export default TodoForm;