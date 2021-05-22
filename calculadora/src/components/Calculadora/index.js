import React, { useState } from 'react'

import Botoes from '../Botoes'

import './style.css'

export function Calculadora() {
	const botoes = [
			'AC', '×', '^', '/',
			'7', '8', '9', '*',
			'4', '5', '6', '-',
			'1', '2', '3', '+',
			'0', '00', '.', '=',
		]

	const [resultado, setResultado] = useState('0')
	const [operacao, setOperacao] = useState('0')

	function mudaVisor(valor) {
		setOperacao(oldValue => setOperacao(oldValue + '' + valor))
	}

	return (
		<>
			<span id="calculadora-span1"></span>
			<div id="calculadora">
				<span id="calculadora-span2"></span>
				<div id="visor">
					<div id="operacao">
						{operacao}
					</div>

					<div id="resultado">
						{resultado}
					</div>
				</div>

				<div id="botoes">
					{botoes.map(item => {
						let tipo = parseInt(item) || parseInt(item) === 0 ? 'numero' : 'operador'

						return <Botoes
									tipo={tipo}
									classe={item === '.' ? 'numero' : tipo}
									onClick={() => mudaVisor(item)}
								>
									<div>{item}</div>
								</Botoes>
					})}
				</div>
			</div>
		</>
	)
}

export default Calculadora