

export default function TodoItem({ id, name, completed}) {

    const handleDeleteButtonClick = () => {
        
    }

    return (
        <li className={completed ? 'done' : ''}>
            {name}
            {
                !completed
                && <button className="btn btn-warning">Update</button>
            }
            {
                !completed
                && <button className="btn btn-danger" >Delete</button>
            }
        </li>
    );
}
