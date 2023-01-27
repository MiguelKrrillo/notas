import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

export default function ProgramaNotas(){
	const valor_inicial = 0;
	const [nota, setNota] = useState(valor_inicial);

	let comprobarNota=(event) => {
		const {value} = event.target
		setNota(value)
	}
	return (
		<div>
		  <h2>Comprobador de notas</h2>
			<input type='number' id= 'nota' />
      <button onClick={comprobarNota()}> Comprobar Nota </button>

		   <p> La nota es ahora {nota}</p>
		</div>
		)
}
