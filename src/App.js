import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="outter-qr-container">
				<div className="inner-qr-container">
					<div className="qr">
						<img src={require("./images/qr-image.png")} alt="" className="qr-image" />
						<div className="description">
							<h1 className="first-sentence">
								Improve your front-end skills by building projects
							</h1>
							<h2 className="second-sentence">
								Scan the QR code to visit Frontend Mentor and take your coding skills to
								the next level
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
