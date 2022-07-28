import "./Logo.css";
import task_logo from '../../../Assets/Images/task_logo.svg';

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src = {task_logo} alt = "logo"/>
        </div>
    );
}

export default Logo;
