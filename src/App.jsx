import "./App.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useState, useEffect } from "react";

function App() {
	const [colors, setColors] = useState([]);

	const json_data = {
		mode: "transformer",
		num_colors: 4,
		temperature: 1.3,
		num_results: 1,
		adjacency: [0, 65, 45, 35, 65, 0, 35, 65, 45, 35, 0, 35, 35, 65, 35, 0],
		palette: ["-", "-", "-"],
	};

	useEffect(() => {
		const fetchColors = async () => {
			try {
				const response = await fetch("https://api.huemint.com/color", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(json_data),
				});
				const data = await response.json();
				setColors(data.results[0].palette);
			} catch (error) {
				console.error("Error fetching colors:", error);
			}
		};

		fetchColors();
	}, []);

	return (
		<>
			<Navbar
				style={{
					color: colors[0],
					backgroundColor: colors[2],
				}}
			/>
			<Main
				style={{
					backgroundColor: colors[1],
					textColor: colors[0],
					ulColor: colors[2],
				}}
			/>
		</>
	);
}

export default App;
