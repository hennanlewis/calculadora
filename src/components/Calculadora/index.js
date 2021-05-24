import React, { useState } from 'react'

import Botoes from '../Botoes'

import botoes from '../../services/botoes'
import './style.css'

export function Calculadora() {
	const [operacao, setOperacao] = useState('0')
	const [resultado, setResultado] = useState('0')
	const [tipoUltimoInputNumero, setTipoUltimoInputNumero] = useState(true)

	function pressionaBotao(entrada) {
		entrada === 'AC' && botaoAC()
		entrada === '×' && botaoX()
		entrada === '0' && botao0()
		entrada === '00' && botao00()
		entrada === '1' && botao1()
		entrada === '2' && botao2()
		entrada === '3' && botao3()
		entrada === '4' && botao4()
		entrada === '5' && botao5()
		entrada === '6' && botao6()
		entrada === '7' && botao7()
		entrada === '8' && botao8()
		entrada === '9' && botao9()
		entrada === '.' && botaoPonto()
		entrada === '^' && botaoExponenciacao()
		entrada === '/' && botaoDivisao()
		entrada === '*' && botaoMultiplicacao()
		entrada === '-' && botaoSubtracao()
		entrada === '+' && botaoAdicao()
		entrada === '=' && botaoIgualdade()
	}

	function botaoAC() {
		console.log('Botão AC pressionado')
		setResultado('0')
		setOperacao('0')
	}

	function botaoX() {
		console.log('Botão × pressionado')
		operacao.length === '1' || parseInt(operacao) < 10
			? setOperacao('0')
			: setOperacao(operacao.slice(0,-1))
		setTipoUltimoInputNumero(true)
	}

	function botao0() {
		console.log('Botão 0 pressionado')
		try {
			setOperacao(valorAnterior => valorAnterior + '0')
			setTipoUltimoInputNumero(true)
		} catch(error) {
			setOperacao('0')
			setResultado('Ocorreu um erro')
		}
	}

	function botao00() {
		console.log('Botão 00 pressionado')
		try {
			setOperacao(valorAnterior => valorAnterior + '00')
		} catch(error) {
			setResultado('Ocorreu um erro')
		}
		setTipoUltimoInputNumero(true)
	}

	function botao1() {
		console.log('Botão 1 pressionado')
		operacao === '0'
			? setOperacao('1')
			: setOperacao(valorAnterior => valorAnterior + '1')
		setTipoUltimoInputNumero(true)
	}

	function botao2() {
		console.log('Botão 2 pressionado')
		operacao === '0'
			? setOperacao('2')
			: setOperacao(valorAnterior => valorAnterior + '2')
		setTipoUltimoInputNumero(true)
	}

	function botao3() {
		console.log('Botão 3 pressionado')
		operacao === '0'
			? setOperacao('3')
			: setOperacao(valorAnterior => valorAnterior + '3')
		setTipoUltimoInputNumero(true)
	}

	function botao4() {
		console.log('Botão 4 pressionado')
		operacao === '0'
			? setOperacao('4')
			: setOperacao(valorAnterior => valorAnterior + '4')
		setTipoUltimoInputNumero(true)
	}

	function botao5() {
		console.log('Botão 5 pressionado')
		operacao === '0'
			? setOperacao('5')
			: setOperacao(valorAnterior => valorAnterior + '5')
		setTipoUltimoInputNumero(true)
	}

	function botao6() {
		console.log('Botão 6 pressionado')
		operacao === '0'
			? setOperacao('6')
			: setOperacao(valorAnterior => valorAnterior + '6')
		setTipoUltimoInputNumero(true)
	}

	function botao7() {
		console.log('Botão 7 pressionado')
		operacao === '0'
			? setOperacao('7')
			: setOperacao(valorAnterior => valorAnterior + '7')
		setTipoUltimoInputNumero(true)
	}

	function botao8() {
		console.log('Botão 8 pressionado')
		operacao === '0'
			? setOperacao('8')
			: setOperacao(valorAnterior => valorAnterior + '8')
		setTipoUltimoInputNumero(true)
	}

	function botao9() {
		console.log('Botão 9 pressionado')
		operacao === '0'
			? setOperacao('9')
			: setOperacao(valorAnterior => valorAnterior + '9')
		setTipoUltimoInputNumero(true)
	}

	function botaoPonto() {
		console.log('Botão . pressionado')
		if(tipoUltimoInputNumero)
			setOperacao(valorAnterior => valorAnterior + '.')
		else {
			botaoX()
		}
		setTipoUltimoInputNumero(false)
	}

	function botaoExponenciacao() {
		console.log('Botão ^ pressionado')
		tipoUltimoInputNumero
			? setOperacao(valorAnterior => valorAnterior + '^')
			: setOperacao(valorAnterior => valorAnterior.slice(-1,0) + '^')
		setTipoUltimoInputNumero(false)
	}

	function botaoDivisao() {
		console.log('Botão / pressionado')
		tipoUltimoInputNumero
			? setOperacao(valorAnterior => valorAnterior + '/')
			: setOperacao(valorAnterior => valorAnterior.slice(-1,0) + '/')
		setTipoUltimoInputNumero(false)
	}

	function botaoMultiplicacao() {
		console.log('Botão * pressionado')
		tipoUltimoInputNumero
			? setOperacao(valorAnterior => valorAnterior + '*')
			: setOperacao(valorAnterior => valorAnterior.slice(-1,0) + '*')
		setTipoUltimoInputNumero(false)
	}

	function botaoSubtracao() {
		console.log('Botão - pressionado')
		tipoUltimoInputNumero
			? setOperacao(valorAnterior => valorAnterior + '-')
			: setOperacao(valorAnterior => valorAnterior.slice(-1,0) + '-')
		setTipoUltimoInputNumero(false)
	}

	function botaoAdicao() {
		console.log('Botão + pressionado')
		tipoUltimoInputNumero
			? setOperacao(valorAnterior => valorAnterior + '+')
			: setOperacao(valorAnterior => valorAnterior.slice(-1,0) + '+')
		setTipoUltimoInputNumero(false)
	}

	function botaoIgualdade() {
		console.log('Botão = pressionado')
		try {
			setResultado((operacao))
		} catch(error) {
			console.error(error)
		}
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
								onClick={() => pressionaBotao(item.name)}
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
