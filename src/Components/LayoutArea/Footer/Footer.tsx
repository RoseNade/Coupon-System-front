import Circle from "../../SharedArea/Circle/Circle";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-around">
            <SocialMedia />
			<h2>All right reserved  &copy; to Tomer Shmueli</h2>
            {/* <TodoTotal /> */}
        </div>
    );
}

export default Footer;
