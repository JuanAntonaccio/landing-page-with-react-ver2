import React from "react";
import Menu from "./menu";
import Jumbutron from "./jumbutron";
import Footer from "./footer";
import Contenedor_Tarjetas from "./contenedor_tarjetas";

const Cuerpo = () => {
	return (
		<div>
			<Menu />
			<Jumbutron />
			<Contenedor_Tarjetas />
			<Footer />
		</div>
	);
};

export default Cuerpo;
