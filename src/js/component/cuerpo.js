import React from "react";
import Menu from "./menu";
import Tarjetas_Varias from "./tarjetas_varias";
import Jumbutron from "./jumbutron";
import Footer from "./footer";

const Cuerpo = () => {
	return (
		<div>
			<Menu />
			<Jumbutron />
			<Tarjetas_Varias />
			<Footer />
		</div>
	);
};

export default Cuerpo;
