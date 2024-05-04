import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { populateData } from '../features/todoSlice';

const TaskList = () => {
  // fetching task list from the redux store
  const reduxData = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // fetch the task list from local storage
  const todoData = JSON.parse(localStorage.getItem('TodoItems'));

  useEffect(() => {
    todoData !== null && dispatch(populateData(todoData));
  }, []);

  return (
    <div className='grid  w-100 mt-5 gap-5'>
      {/* This  will be shown when the task list is empty */}
      {reduxData.length === 0 && (
        <div className='text-center fs-5'>The Task List seems to be lonely!!!</div>
      )}
      {/* Mapping over the list of all TODO tasks */}
      {reduxData.map((item) => (
        <TaskItem id={item.id} name={item.name} status={item.completed} />
      ))}
    </div>
  );
};

export default TaskList;
