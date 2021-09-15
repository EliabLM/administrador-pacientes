import React, { Fragment, useState, useEffect } from 'react';
import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';

function App() {
	// Citas en local storage
	let citasIniciales = JSON.parse(localStorage.getItem('citas'));
	if (!citasIniciales) {
		citasIniciales = [];
	}

	// Arreglo de citas
	const [citas, guardarCita] = useState(citasIniciales);

	// use Effect que cambia cuando se agregue o elimine alguna cita
	useEffect(() => {
		if (citasIniciales) {
			localStorage.setItem('citas', JSON.stringify(citas));
		} else {
			localStorage.setItem('citas', JSON.stringify([]));
		}
	}, [citas]);

	// funcion que tome las citas actuales y agregue la nueva
	const crearCita = (cita) => {
		guardarCita([...citas, cita]);
	};

	// Funcion que eliminar una cita por su ido
	const eliminarCita = (id) => {
		const nuevasCitas = citas.filter((cita) => cita.id !== id);
		guardarCita(nuevasCitas);
	};

	// Mensaje condicional
	const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario crearCita={crearCita} />
					</div>
					<div className="one-half column">
						<h2>{titulo}</h2>
						{citas.map((cita) => (
							<Cita eliminarCita={eliminarCita} cita={cita} key={cita.id} />
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
