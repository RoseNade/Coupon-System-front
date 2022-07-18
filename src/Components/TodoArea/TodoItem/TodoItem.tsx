import moment from "moment";
import { TodoModel } from "../../../models/Todo";
import "./TodoItem.css";

interface TodoItemProps{
    task: TodoModel;
}

function TodoItem(props: TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem">
            <h2>{props.task.caption}</h2>

            <div className="card">
                <img src="https://cataas.com/cat/gif" alt={props.task.caption}/>
                    <h1>{props.task.classification}</h1>
                    <p className="price">{moment(props.task.dueDate).format("DD/MM/yyyy")}</p>
                    {/* <p className="price">{moment(props.task.dueDate).format("hh:mm:ss")}</p> */}
                    <p>{props.task.info}</p>
                    <p><button>TBD</button></p>
            </div>
        </div>
    );
}

export default TodoItem;
