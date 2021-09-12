import React from "react";
import Tarjeta from "./tarjeta";

const Contenedor_Tarjetas = () => {
	const tarjetas = [
		{ titulo: "Titulo tarjeta 1", descripcion: "datos tarjeta 1" },
		{ titulo: "Titulo tarjeta 2", descripcion: "datos tarjeta 2" },
		{ titulo: "Titulo tarjeta 3", descripcion: "datos tarjeta 3" },
		{ titulo: "Titulo tarjeta 4", descripcion: "datos tarjeta 4" }
	];

	return (
		<div className="row">
			{tarjetas.map((item, indice) => {
				return (
					<div key={indice} className="col">
						<Tarjeta
							titulo={item.titulo}
							descripcion={item.descripcion}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Contenedor_Tarjetas;
