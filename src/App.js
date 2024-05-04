import { useDispatch } from 'react-redux';
import './App.css';
import TaskList from './components/TaskList';
import { addItem } from './features/todoSlice';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const dispatch = useDispatch();
  const [itemName, setitemName] = useState('');
  const unique_id = uuid();

  // Function to create a new Task
  const addNewItem = () => {
    dispatch(addItem({ name: itemName, id: unique_id }));
    setitemName('');
  };

  return (
    <div>
      <h1 className='text-center m-5'>ToDo List</h1>

      {/* Displaying the List of Todo */}
      <TaskList />
      {/* Button to add a new TODO Item */}
      <div className='d-flex m-5 justify-content-center'>
        <button
          type='button'
          data-bs-toggle='modal'
          data-bs-target='#addItemModal'
          className='btn btn-primary'
        >
          Add List Item
        </button>
      </div>

      {/* Modal to add new todo Item */}
      <div
        id='addItemModal'
        className='modal fade'
        tabindex='-1'
        data-bs-backdrop='static'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog '>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-title fs-5'>Add an Item</div>
              <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body w-100'>
              <form className='w-100'>
                <label htmlFor='taskName' className=''>
                  Task Name:
                  <input
                    type='text'
                    id='taskName'
                    value={itemName}
                    className='mx-2 '
                    placeholder='Enter your task'
                    onChange={(e) => setitemName(e.target.value)}
                    required='true'
                  />
                </label>
              </form>
            </div>
            <div className='modal-footer '>
              <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                Close
              </button>
              <button
                type='button'
                className='btn btn-success'
                data-bs-dismiss='modal'
                onClick={addNewItem}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
