import axios from "axios";
import { useEffect, useState } from "react";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Circle.css";
interface CircleProps{
    num: number;
}


function Circle(props: CircleProps): JSX.Element {
    const [num, setNum] = useState<number>(props.num);

    // useEffect(() => {
    //     axios.get<number>(globals.urls.tasks + 'count')
    //         .then((result) => {
    //             setNum(result.data);
    //         })
    //         .catch((error) => { notify.error(error.message) });
    // }, []);

    return (
        <div className="Circle">
            {num}
        </div>
    );
}

export default Circle;
