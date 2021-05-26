import React, { useState } from 'react'

import Botoes from '../Botoes'

import botoes from '../../services/botoes'
import './style.css'

export function Calculadora() {
	const [operacao, setOperacao] = useState(['0'])
	const [operacaoVisor, setOperacaoVisor] = useState('0')
	const [resultado, setResultado] = useState('0')
	const [ultimoValor, setUltimoValor] = useState('')
	const [tipoUltimoValor, setTipoUltimoValor] = useState('')

	function handleBotao(entrada) {
		let pressionaBotao = opcaoBotao[entrada]
		pressionaBotao()
	}

	function atualizaVisor(valor) {
		setOperacao([...operacao, valor])
	}

	const opcaoBotao = {
		'AC': function() {
			console.log('Botão AC pressionado')
			setResultado('0')
			setOperacao('0')
			setOperacaoVisor('0')
		},
		'DEL': function() {
			console.log('Botão DEL pressionado')
			operacao.length < 2
				? setOperacao('0')
				: setOperacao(operacao.slice(-1, 0))
		},
		'MUDA': function() {
			console.log('Botão MUDA pressionado')
		},
		'0': function() {
			console.log('Botão 0 pressionado')
			setOperacao([...operacao, '0'])
			setOperacaoVisor([...operacao, '0'])
		},
		'1': function() {
			console.log('Botão 1 pressionado')
			setOperacao([...operacao, '1'])
			setOperacaoVisor([...operacao, '1'])
		},
		'2': function() {
			console.log('Botão 2 pressionado')
			setOperacao([...operacao, '2'])
			setOperacaoVisor([...operacao, '2'])
		},
		'3': function() {
			console.log('Botão 3 pressionado')
			setOperacao([...operacao, '3'])
			setOperacaoVisor([...operacao, '3'])
		},
		'4': function() {
			console.log('Botão 4 pressionado')
			setOperacao([...operacao, '4'])
			setOperacaoVisor([...operacao, '4'])
		},
		'5': function() {
			console.log('Botão 5 pressionado')
			setOperacao([...operacao, '5'])
			setOperacaoVisor([...operacao, '5'])
		},
		'6': function() {
			console.log('Botão 6 pressionado')
			setOperacao([...operacao, '6'])
			setOperacaoVisor([...operacao, '6'])
		},
		'7': function() {
			console.log('Botão 7 pressionado')
			setOperacao([...operacao, '7'])
			setOperacaoVisor([...operacao, '7'])
		},
		'8': function() {
			console.log('Botão 8 pressionado')
			setOperacao([...operacao, '8'])
			setOperacaoVisor([...operacao, '8'])
		},
		'9': function() {
			console.log('Botão 9 pressionado')
			setOperacao([...operacao, '9'])
			setOperacaoVisor([...operacao, '9'])
		},
		'+': function() {
			console.log('Botão + pressionado')
		},
		'-': function() {
			console.log('Botão - pressionado')
		},
		'÷': function() {
			console.log('Botão ÷ pressionado')
		},
		'×': function() {
			console.log('Botão × pressionado')
		},
		'^': function() {
			console.log('Botão ^ pressionado')
		},
		'.': function() {
			console.log('Botão . pressionado')
		},
		'=': function() {
			console.log('Botão = pressionado')
		}
	}

	return (
		<>
			<div id="calculadora">
				<span id="calculadora-span1"></span>
				<div id="visor">
					<div id="operacao">
						{operacaoVisor}
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
								onClick={() => handleBotao(item.name)}
							>
								<div>{item.name}</div>
							</Botoes>
						)
					})}
				</div>
			</div>
			<span id="calculadora-span2"></span>
			<span id="calculadora-span3"></span>
		</>
	)
}

export default Calculadora
