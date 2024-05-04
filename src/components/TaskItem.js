import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/todoSlice';

const TaskItem = ({ id, name, status }) => {
  // state variable to keep track of a particular task's completion status
  const [checkbox, setCheckbox] = useState(status);
  const dispatch = useDispatch();

  //Function to update the checkbox
  const updateStatus = () => {
    setCheckbox(!checkbox);
  };

  return (
    // This is a component for a single task
    <div className='d-flex justify-content-between w-50 mx-auto m-2 fs-5 '>
      <input type='checkbox' checked={checkbox} onChange={updateStatus} />
      <p>{name}</p>
      <div className='d-flex gap-2'>
        <button className='btn btn-danger' onClick={() => dispatch(removeItem(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
