import { useDispatch } from "react-redux";
import { toggleTodoStatus } from "../../redux/actions";


export default function TodoItem({ id, name, completed }) {

    const dispatch = useDispatch();

    const handleDeleteButtonClick = () => {
        dispatch(
            toggleTodoStatus(id)
        );
    }

    return (
        <li className={completed ? 'done' : ''}>
            {name}
            {
                !completed
                && <button className="btn btn-warning">Edit</button>
            }
            {
                !completed
                && <button className="btn btn-danger" onClick={handleDeleteButtonClick}>Done</button>
            }
        </li>
    );
}
