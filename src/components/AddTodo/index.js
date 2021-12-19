import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';

export default function AddTodo() {

    const [todoName, setTodoName] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    }

    const handleAddButtonClick = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            completed: false,
          }));
        setTodoName('');
    }

    return (
        <div className="row">
            <h3>Add Task</h3>
            <div className="fg">
                <input type="text" value={todoName} onChange={handleInputChange} />
                <button className="btn btn-primary" onClick={handleAddButtonClick}>Add</button>
            </div>
        </div>
    );
}
