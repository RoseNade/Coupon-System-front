import "./Donate.css";

function Donate(): JSX.Element {
    return (
        <div className="Donate flex-top-center">
			<h1>This is an open source Todo application, please consider donating</h1>
            <a href="https://www.paypal.com/donate/?hosted_button_id=FP4VFNAYT6WGL">Donation link</a>
        </div>
    );
}

export default Donate;
