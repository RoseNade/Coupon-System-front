import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-around-top-bottom">
            <SocialMedia />
			<h2>All right reserved  &copy; to Tomer Shmueli</h2>
        </div>
    );
}

export default Footer;
