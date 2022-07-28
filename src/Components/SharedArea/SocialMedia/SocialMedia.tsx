import "./SocialMedia.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.linkedin.com/in/tomer-shmueli-75594b157/"><BsLinkedin size={42} /></a>
            <a href="https://github.com/RoseNade"><BsGithub size={42} /></a>
        </div>
    );
}

export default SocialMedia;
