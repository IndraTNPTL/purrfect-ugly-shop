import aboutImg from "../Assets/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code-vector-isolated-concept-metaphor-illustration_335657-2789.avif";

function About() {
	return (
		<div className="about">
			<div className="about-content">
				<h1>
					About This <span className="highlight-color">Purrfect</span>{" "}
					Ugly Shop
				</h1>
				<div className="about-description">
					<img
						src={aboutImg}
						className="about-img"
						alt="About image"
					/>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Nam, modi maiores asperiores numquam quidem cum?
						Inventore qui sed voluptate, similique, atque
						consequatur quibusdam omnis dolores adipisci, nulla
						delectus ratione in?
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
