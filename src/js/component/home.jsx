import React from "react";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
		<main className="container">
		<Navbar/>
		<Jumbotron/>
		<div className="row">
		<div className="col"><Card/></div>

		<div className="col"><Card/></div>

		<div className="col"><Card/></div>

		<div className="col"><Card/></div>
		</div>
		<Footer/>
		</main>
		</React.Fragment>
	);
};

export default Home;