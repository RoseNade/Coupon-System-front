import About from "../../PagesArea/About/About";
import Donate from "../../PagesArea/Donate/Donate";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import AddTodo from "../../TodoArea/AddTodo/AddTodo";
import DeleteTodo from "../../TodoArea/DeleteTodo/DeleteTodo";
import EditTodo from "../../TodoArea/EditTodo/EditTodo";
import TodoList from "../../TodoArea/TodoList/TodoList";

import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			{/* <TodoList /> */}
            {/* <AddTodo /> */}
            {/* <EditTodo /> */}
            {/* <DeleteTodo /> */}
            {/* <About /> */}
            <Donate />
        </div>
    );
}

export default Main;
