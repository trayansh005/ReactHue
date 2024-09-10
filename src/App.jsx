import "./App.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useState, useEffect } from "react";

const API_URL = "https://api.huemint.com/color";
const DEFAULT_COLOR_CONFIG = {
	mode: "transformer",
	num_colors: 4,
	temperature: 1.3,
	num_results: 1,
	adjacency: [0, 65, 45, 35, 65, 0, 35, 65, 45, 35, 0, 35, 35, 65, 35, 0],
	palette: ["-", "-", "-"],
};

function App() {
	const [colors, setColors] = useState(["#fff", "#fefefe", "#000"]);

	useEffect(() => {
		const fetchColors = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(DEFAULT_COLOR_CONFIG),
				});
				const data = await response.json();
				setColors(data.results[0].palette);
			} catch (error) {
				console.error("Error fetching colors:", error);
			}
		};

		fetchColors();
	}, []);

	const navbarStyle = {
		color: colors[0],
		backgroundColor: colors[2],
	};

	const mainStyle = {
		backgroundColor: colors[1],
		textColor: colors[0],
		ulColor: colors[2],
	};

	return (
		<>
			<Navbar style={navbarStyle} />
			<Main style={mainStyle} />
		</>
	);
}

export default App;
