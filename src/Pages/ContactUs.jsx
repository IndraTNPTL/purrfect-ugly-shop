import { useState } from "react";

function ContactUs() {
	const [text, setText] = useState("");
	const [count, setCount] = useState(2312);
	const [helpCount, setHelpCount] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	const handleTextChange = (event) => {
		setText(event.target.value);
	};
	const handleButtonClick = () => {
		console.log(text);
		setSubmitted(true);
	};

	const handleHelpClick = () => {
		setHelpCount(helpCount + 1);
		setCount(count + 1);
	};

	return (
		<div className="page-container">
			<div className="list-content">
				<div
					className={`help-form${
						submitted ? " help-form--submitted" : ""
					}`}
					style={{ height: "220px" }}
				>
					<div className="help-form-container">
						<h2 className="help-form-title">Don't contact us!</h2>
						{/* <button className="button button--solid button--blue help-form__close-button">
					<span className="icon icon-chevron-up">^</span>
				</button> */}
						<textarea
							className="help-form-text-area"
							value={text}
							onChange={handleTextChange}
						></textarea>
						<div className="align align--fluid align--even "></div>
						<div className="align-cell u-left"></div>
						<a
							className="help-form-help-button"
							onClick={handleHelpClick}
						>
							Help
						</a>

						<div className="align-cell u-right">
							<button
								className="button button--solid button--blue help-form__send-to-bottom-button"
								onClick={handleButtonClick}
							>
								<span className="hightlight-send">Send</span>
								{/* <br />
            <span className="discrete">to bottom</span> */}
							</button>
						</div>
					</div>
					<div className="help-form__response">
						Please GO, there are {count} people in line.
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
