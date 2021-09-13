import React, { Fragment, useState } from 'react';
import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';

function App() {
	// Arreglo de citas
	const [citas, guardarCita] = useState([]);

	// funcion que tome las citas actuales y agregue la nueva
	const crearCita = (cita) => {
		guardarCita([...citas, cita]);
	};

	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario crearCita={crearCita} />
					</div>
					<div className="one-half column">
						<h2>Administra tus citas</h2>
						{citas.map((cita) => (
							<Cita cita={cita} key={cita.id} />
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
