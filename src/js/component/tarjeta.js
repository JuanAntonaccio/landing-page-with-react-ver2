import React from "react";
import PropTypes from "prop-types";

const Tarjeta = props => {
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.dirurl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.descripcion}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Tarjeta.propTypes = {
	titulo: PropTypes.string,
	descripcion: PropTypes.string,
	dirurl: PropTypes.string
};

export default Tarjeta;
