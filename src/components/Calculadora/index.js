import React, { useState } from 'react'

import Botoes from '../Botoes'

import './style.css'
import botoes from '../../services/botoes'

export function Calculadora() {
	const [resultado, setResultado] = useState('0')
	const [operacao, setOperacao] = useState('0')

	function mudaVisor(index) {
		setOperacao(0)
	}

	return (
		<>
			<div id="calculadora">
				<span id="calculadora-span1"></span>
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
						return (
							<Botoes
								key={item.name}
								classe={item.class}
								onClick={() => mudaVisor(item)}
							>
								<div>{item.name}</div>
							</Botoes>
						)
					})}
				</div>
			</div>
			<span id="calculadora-span3"></span>
			<span id="calculadora-span2"></span>
		</>
	)
}

export default Calculadora
