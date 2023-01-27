import React, {useState} from 'react'

export default function ProgramaNotas(){
	const valor_inicial = 0;
	const [nota, setNota] = useState(valor_inicial);

	let comprobarNota=(event) => {
		const {value} = event.target
		setNota(value * 2)
	}
	return (
		<div>
		<h2>Comprobador de notas</h2>
			<input type='number' id= 'nota' onDoubleClick={comprobarNota} />

		   <p> La nota es ahora {nota}</p>
		</div>
		)
}