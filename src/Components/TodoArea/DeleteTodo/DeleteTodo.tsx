import { useState } from "react";
import "./DeleteTodo.css";


function DeleteTodo(): JSX.Element {
    const [id, setId] = useState<number>(5);

    return (
        <div className="DeleteTodo flex-top-center">
            <h1>Delete Task</h1>

            <h3>Are you sure you want to delete task #{id}?</h3>
            <div>
                <button>YES</button> <button>NO</button>
            </div>

        </div>
    );
}

export default DeleteTodo;
