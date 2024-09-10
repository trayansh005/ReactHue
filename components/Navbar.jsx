import reactLogo from "../src/assets/react.svg";

const Navbar = ({ style }) => {
	console.log(style);
	return (
		<nav style={style}>
			<img className="nav--logo" src={reactLogo} alt="reactLogo" />
			<h1 className="nav--title">ReactFacts</h1>
			<h4 className="nav--project">React Course - Project 1</h4>
		</nav>
	);
};

export default Navbar;
