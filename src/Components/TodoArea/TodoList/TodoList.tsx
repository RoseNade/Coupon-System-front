import axios from "axios";
import { useEffect, useState } from "react";
import { TodoModel } from "../../../models/Todo";
import globals from "../../../Services/globals";
import notify from "../../../Services/Notification";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<TodoModel[]>([]);

    useEffect(() => {
        axios.get<TodoModel[]>(globals.urls.tasks)
            .then((result) => {
                notify.success("success, got the tasks")
                setTasks(result.data);
            })
            .catch((error) => { notify.error(error.message) });
    }, []);

    return (
        <div className="TodoList ">
            <h2>Todo List</h2>

            <div className="flex-row-non-wrap-list">
                {
                    (tasks.length > 0)
                        ?
                        tasks.map(t => <TodoItem key={t.id} task={t} />)
                        :
                        <EmptyView msg="No tasks found" />
                }
            </div>
        </div>
    );
}

export default TodoList;