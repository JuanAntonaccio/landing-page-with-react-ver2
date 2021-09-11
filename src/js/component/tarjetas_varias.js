import React from "react";
import Tarjeta from "./tarjeta";

const Tarjetas_Varias = () => {
	let valores={
		tarjeta:"tarjeta 1",
		tarjeta:"tarjeta 2",
		tarjeta:"tarjeta 3",
		tarjeta:"tarjeta 4"
	}

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
