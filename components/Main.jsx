const Main = ({ style }) => {
	return (
		<>
			<style>
				{`
				.main--facts {
					list-style-type: disc;
				}
				.main--facts li {
					color: ${style.textColor}; /* Color for li text */
				}
				.main--facts li::marker {
					color: ${style.ulColor}; /* Color for li markers */
				}
				`}
			</style>
			<main style={{ backgroundColor: style.backgroundColor }}>
				<h1 className="main--title" style={{ color: style.textColor }}>
					Fun facts about React
				</h1>
				<ul className="main--facts">
					<li>Was first released in 2013</li>
					<li>Was originally created by Jordan Walke</li>
					<li>Has well over 100K stars on GitHub</li>
					<li>Is maintained by Facebook</li>
					<li>Powers thousands of enterprise apps, including mobile apps</li>
				</ul>
			</main>
		</>
	);
};

export default Main;
