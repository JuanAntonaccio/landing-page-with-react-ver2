import React from "react";

const Menu = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>

				<div className="  " id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link disabled" href="#">
							About
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Services
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
