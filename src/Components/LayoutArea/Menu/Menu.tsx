import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu flex-top-center a">
			<a href="#" >Home</a>
            <a href="#">Tasks</a>
            <a href="http://localhost:3000/About">About</a>
            <a href="#">Donate</a>
        </div>
    );
}

export default Menu;
