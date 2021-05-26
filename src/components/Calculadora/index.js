import React, { useState } from 'react'

import Botoes from '../Botoes'

import botoes from '../../services/botoes'
import './style.css'

export function Calculadora() {
	const [visorOperacao, setVisorOperacao] = useState('0')
	const [visorResultado, setVisorResultado] = useState('0')
	const [tipoUltimoValor, setTipoUltimoValor] = useState('')
	const [flagDecimal, setFlagDecimal] = useState(false)

	function handleBotao(entrada) {
		console.log('Botão ' + entrada + ' pressionado')
		let pressionaBotao = opcaoBotao[entrada]
		pressionaBotao()
	}

	function atualizaVisor(valor, tipoValor) {
		let tamanhoVetor = tipoUltimoValor.length
		if(tipoValor === 'operação' && tipoValor === tipoUltimoValor[tamanhoVetor - 1]) {
			setFlagDecimal(false)
			deletaUltimoValor()
		}

		visorOperacao === '0'
			? setVisorOperacao(valor)
			: setVisorOperacao(valorAnterior => valorAnterior + valor)

		setTipoUltimoValor([...tipoUltimoValor, tipoValor])
	}

	function deletaUltimoValor() {
		if(visorOperacao.length < 2) {
			setVisorOperacao('0')
			setTipoUltimoValor()
			setFlagDecimal(false)
			return
		}

		let tamanhoVetor = visorOperacao.length
		setVisorOperacao(valorAnterior => valorAnterior.slice(0, tamanhoVetor - 1))
		setTipoUltimoValor(valorAnterior => valorAnterior.slice(0, tamanhoVetor - 1))
		visorOperacao[tamanhoVetor - 1] === '.' && setFlagDecimal(false)
	}

	function calculaResultado() {
		let tamanho = tipoUltimoValor.length
		tipoUltimoValor[tamanho - 1] === 'operação' && deletaUltimoValor()

		let valores = visorOperacao.replaceAll(/(\+|-|÷|×|\^)/g, ' $1 ')
		valores = valores.split(' ')
		console.log(valores)
		valores = substituiExpressao(valores, '^')
		valores = substituiExpressao(valores, '×')
		valores = substituiExpressao(valores, '÷')
		valores = substituiExpressao(valores, '+')
		valores = substituiExpressao(valores, '-')
		console.log(valores)
		setVisorResultado(valores)
	}

	function substituiExpressao(vetor, expressao) {
		let index = 0
		while(vetor.indexOf(expressao) !== -1) {
			index = vetor.indexOf(expressao)
			if(expressao === '^')
				vetor[index - 1] = Math.pow(parseFloat(vetor[index - 1]), parseFloat(vetor[index + 1]))
			if(expressao === '×')
				vetor[index - 1] = parseFloat(vetor[index - 1]) * parseFloat(vetor[index + 1])
			if(expressao === '÷')
				vetor[index - 1] = parseFloat(vetor[index - 1]) / parseFloat(vetor[index + 1])
			if(expressao === '+')
				vetor[index - 1] = parseFloat(vetor[index - 1]) + parseFloat(vetor[index + 1])
			if(expressao === '-')
				vetor[index - 1] = parseFloat(vetor[index - 1]) - parseFloat(vetor[index + 1])

			vetor.splice(index, index + 1)
		}
		return vetor
	}

	const opcaoBotao = {
		'AC': function() {
			setVisorResultado('0')
			setVisorOperacao('0')
			setTipoUltimoValor('número')
		},
		'DEL': function() {
			deletaUltimoValor()
			setTipoUltimoValor('número')
		},
		'MUDA': function() {
		},
		'0': function() {
			atualizaVisor('0', 'número')
		},
		'1': function() {
			atualizaVisor('1', 'número')
		},
		'2': function() {
			atualizaVisor('2', 'número')
		},
		'3': function() {
			atualizaVisor('3', 'número')
		},
		'4': function() {
			atualizaVisor('4', 'número')
		},
		'5': function() {
			atualizaVisor('5', 'número')
		},
		'6': function() {
			atualizaVisor('6', 'número')
		},
		'7': function() {
			atualizaVisor('7', 'número')
		},
		'8': function() {
			atualizaVisor('8', 'número')
		},
		'9': function() {
			atualizaVisor('9', 'número')
		},
		'+': function() {
			atualizaVisor('+', 'operação')
		},
		'-': function() {
			atualizaVisor('-', 'operação')
		},
		'÷': function() {
			atualizaVisor('÷', 'operação')
		},
		'×': function() {
			atualizaVisor('×', 'operação')
		},
		'^': function() {
			atualizaVisor('^', 'operação')
		},
		'.': function() {
			if(flagDecimal === false) {
				atualizaVisor('.', 'operação')
				setFlagDecimal(true)
			}
		},
		'=': function() {
			calculaResultado()
		}
	}

	return (
		<>
			<div id="calculadora">
				<span id="calculadora-span1"></span>
				<div id="visor">
					<div id="operacao">
						{visorOperacao}
					</div>

					<div id="resultado">
						{visorResultado}
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
