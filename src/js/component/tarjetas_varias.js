import React from "react";
import Tarjeta from "./tarjeta";

const Tarjetas_Varias = () => {
	return (
		<div className="row">
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
		</div>
	);
};

export default Tarjetas_Varias;
