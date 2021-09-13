import React from "react";
import Tarjeta from "./tarjeta";
let dir1 = "https://picsum.photos/200/300";
let dir2 = "https://picsum.photos/200/300";
let dir3 = "https://picsum.photos/200/300";
let dir4 = "https://picsum.photos/200/300";
const Contenedor_Tarjetas = () => {
	const tarjetas = [
		{
			titulo: "Titulo tarjeta 1",
			descripcion: "datos tarjeta 1",
			dirurl: dir1
		},
		{
			titulo: "Titulo tarjeta 2",
			descripcion: "datos tarjeta 2",
			dirurl: dir2
		},
		{
			titulo: "Titulo tarjeta 3",
			descripcion: "datos tarjeta 3",
			dirurl: dir3
		},
		{
			titulo: "Titulo tarjeta 4",
			descripcion: "datos tarjeta 4",
			dirurl: dir4
		}
	];

	return (
		<div className="row">
			{tarjetas.map((item, indice) => {
				return (
					<div key={indice} className="col">
						<Tarjeta
							titulo={item.titulo}
							descripcion={item.descripcion}
							dirurl={item.dirurl}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Contenedor_Tarjetas;
