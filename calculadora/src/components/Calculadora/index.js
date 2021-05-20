import React, { useState } from 'react'

import Botoes from '../Botoes'

import './style.css'

export function Calculadora() {

	const botoes = [
			'0', '.', '00', '=',
			'1', '2', '3','+',
			'4', '5', '6', '-',
			'7', '8', '9', '*',
			'AC', 'X', '^', '/']

	return (
		<div id="calculadora">
			<div id="visor">
				3x2
			</div>

			<div id="botoes">
				{botoes.map(item => {
					let tipo = parseInt(item) ? 'numero' : 'operador'
					return <Botoes tipo={tipo} classe={item === '.' ? 'numero' : tipo} children={item}/>
				})}
			</div>
		</div>
	)
}

export default Calculadora