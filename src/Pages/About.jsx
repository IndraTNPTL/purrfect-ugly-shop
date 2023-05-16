import aboutImg from "../Assets/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code-vector-isolated-concept-metaphor-illustration_335657-2789.avif";
import linkedinLogo from "../Assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";

import { useEffect } from "react";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					About This
					<span className="highlight-color italic"> Purrfect</span>
					<span className="italic"> Ugly </span>Shop
				</h1>

				<div className="about-container">
					<div className="about-description">
						<div className="about-img">
							<img
								src={aboutImg}
								className="about-img"
								alt="About image"
							/>
						</div>
						<div className="about-text">
							<h2 className="about-subtitle">About us</h2>
							<p>
								<b>Welcome to our website!</b> We are a dynamic
								duo of aspiring developers who are passionate
								about creating{" "}
								<b>
									funny, innovative and user-friendly web
									solutions.
								</b>
								<br /> <br />
								With a shared love for coding and design, we
								have joined forces to bring our skills and
								creativity together.
								<br /> <br />
								<b>
									Ready to embark on a transformative digital
									journey?
								</b>
							</p>
							<div className="social-share">
								<h3>Join us on Linkedin!</h3>
								<div className="social-infos">
									<div className="social-details">
										<h4>Indra ➡️</h4>
										<a
											href="https://www.linkedin.com/in/indratinotpatole/"
											target="_blank"
										>
											<img
												className="logo linkedin-img"
												src={linkedinLogo}
												alt="linkedin link Indra"
											/>
										</a>
									</div>
									<div className="social-details">
										<h4>Crystine ➡️</h4>
										<a
											href="https://www.linkedin.com/in/yin-yee-koh-b1874349/"
											target="_blank"
										>
											<img
												className="logo linkedin-img"
												src={linkedinLogo}
												alt="linkedin link Crystine"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
