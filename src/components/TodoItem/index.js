import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, updateTodo } from "../../redux/actions";


export default function TodoItem({ id, name, completed }) {

    const [editButton, setEditButton] = useState(false);
    const [nameEdit, setNameEdit] = useState(name);

    const dispatch = useDispatch();

    const handleDoneButtonClick = () => {
        dispatch(
            toggleTodoStatus(id)
        );
    }
    const handleEditButtonClick = () => {
        setEditButton(!editButton);

    }
    const handleUpdateButtonClick = () => {
        setEditButton(!editButton);
        dispatch(
            updateTodo({id, nameEdit})
        );
    }
    const handleChangeNameEdit = (e) => {
        setNameEdit(e.target.value);
    }

    return (
        <li className={completed ? 'done' : ''}>
            {
                !editButton 
                && name
            }
            {
                editButton 
                && <input type="text" className="form-control" value={nameEdit} onChange={handleChangeNameEdit}/>
            }
            {
                !completed
                && !editButton
                && <button className="btn btn-warning" onClick={handleEditButtonClick}>Edit</button>
            }
            {// open for edit field.
                !completed
                && editButton
                && <button className="btn btn-success" onClick={handleUpdateButtonClick}>Update</button>
            }
            {
                !completed
                && <button className="btn btn-danger" onClick={handleDoneButtonClick}>Done</button>
            }
        </li>
    );
}
