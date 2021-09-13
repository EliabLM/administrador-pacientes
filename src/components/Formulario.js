import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = () => {
	// Crear State de citas
	const [cita, actualizarCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		sintomas: '',
	});

	const [error, actualizarError] = useState(false);

	// Función que se ejecuta cada que el usuario escribe en un input
	const actualizarState = (event) => {
		actualizarCita({
			...cita, // copia el valor de cita completo
			[event.target.name]: event.target.value,
		});
	};

	// Extraer los valores
	const { mascota, propietario, fecha, hora, sintomas } = cita;

	// Cuando el usuario presiona agregar cita
	const submitCita = (event) => {
		event.preventDefault(); // prevernir que se envie por el metodo get

		// Validar
		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			actualizarError(true);
			return; // no permite que se siga ejecutando el código
		}

		// Eliminar el mensaje previo
		actualizarError(false);

		// Asignar un ID
		cita.id = uuidv4();

		// Crear la cita

		// Reinicia el form
	};

	return (
		<Fragment>
			<h2>Crear Cita</h2>

			{error ? (
				<p className="alerta-error">Todos los campos son obligatorios</p>
			) : null}

			<form onSubmit={submitCita}>
				<label>Nombre Mascota</label>
				<input
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre mascota"
					onChange={actualizarState}
					value={mascota}
				/>
				<label>Nombre Dueño</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre dueño mascota"
					onChange={actualizarState}
					value={propietario}
				/>
				<label>Fecha</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={actualizarState}
					value={fecha}
				/>
				<label>Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={actualizarState}
					value={hora}
				/>
				<label>Síntomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={actualizarState}
					value={sintomas}
				></textarea>
				<button type="submit" className="u-full-width button-primary">
					Agregar Cita
				</button>
			</form>
		</Fragment>
	);
};

export { Formulario };
