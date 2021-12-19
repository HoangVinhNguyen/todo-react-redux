import TodoItem from "../TodoItem"

export default function TodoList() {

    return (
        <div className="row">
            <h3>TODO</h3>
            <ul>
                <TodoItem key='1' name={'Learn E'} completed={false} />
                <TodoItem key='2' name={'Learn B'} completed={false} />
                <TodoItem key='3' name={'Learn C'} completed={true} />
            </ul>
        </div>
    )
}
