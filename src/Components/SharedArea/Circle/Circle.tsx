import axios from "axios";
import { useEffect, useState } from "react";
import { TodoModel } from "../../../models/Todo";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Circle.css";

function Circle(): JSX.Element {
    const [num, setNum] = useState(0);

    useEffect(() => {
        axios.get<number>(globals.urls.count)
            .then((result) => {
                notify.success("success")
                setNum(result.data);
            })
            .catch((error) => { notify.error(error.message) });
    }, []);
    
    return (
        <div className="Circle">
			{num}
        </div>
    );
}

export default Circle;
