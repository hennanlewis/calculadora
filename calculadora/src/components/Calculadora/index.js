import React, { useState } from 'react'

import Botoes from '../Botoes'

import './style.css'

export function Calculadora() {
	const botoes = [
			'AC', 'X', '^', '/',
			'7', '8', '9', '*',
			'4', '5', '6', '-',
			'1', '2', '3','+',
			'0', '00', '.', '=',
		]

	const [resultado, setResultado] = useState('0')
	const [operacao, setOperacao] = useState('0')

	function mudaVisor(valor) {
		setOperacao(valor)
		setResultado(valor)
	}

	return (
		<div id="calculadora">
			<div id="visor">
				<div id="resultado">
					{resultado}
				</div>

				<div id="operacao">
					{operacao}
				</div>
			</div>

			<div id="botoes">
				{botoes.map(item => {
					let tipo = parseInt(item) || parseInt(item) === 0 ? 'numero' : 'operador'

					return <Botoes 
								tipo={tipo} 
								classe={item === '.' ? 'numero' : tipo} 
								children={item}
								onClick={() => mudaVisor(item)}
							/>
				})}
			</div>
		</div>
	)
}

export default Calculadora