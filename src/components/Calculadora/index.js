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
		if (tipoValor === 'operação' && tipoValor === tipoUltimoValor[tamanhoVetor - 1]) {
			setFlagDecimal(false)
			deletaUltimoValor()
		}

		visorOperacao === '0'
			? setVisorOperacao(valor)
			: setVisorOperacao(valorAnterior => valorAnterior + valor)

		setTipoUltimoValor([...tipoUltimoValor, tipoValor])
	}

	function deletaUltimoValor() {
		if (visorOperacao.length < 2) {
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
		valores = calculaExponenciacao(valores)
		valores = calculaMultiDivi(valores)
		valores = calculaSomaSub(valores)
		setVisorResultado(valores)
	}

	function calculaExponenciacao(vetor) {
		let index = 0
		while (vetor.indexOf('^') !== -1) {
			index = vetor.indexOf('^')
			vetor[index - 1] = Math.pow(parseFloat(vetor[index - 1]), parseFloat(vetor[index + 1]))
			vetor.splice(index, index + 1)
		}
		console.log('Expressão após cálculo de todas as exponenciações: ' + [vetor])	
		return vetor
	}
	
	function calculaMultiDivi(vetor) {
		let index = 0
		while (vetor.indexOf('×') !== -1 || vetor.indexOf('÷') !== -1) {
			let indexMultiplicacao = vetor.indexOf('×') === -1 ? Infinity : vetor.indexOf('×')
			let indexDivisao = vetor.indexOf('÷') === -1 ? Infinity : vetor.indexOf('÷')
			
			if(indexMultiplicacao < indexDivisao) {
				vetor[indexMultiplicacao - 1] = parseFloat(vetor[indexMultiplicacao - 1]) * parseFloat(vetor[indexMultiplicacao + 1])
				index = indexMultiplicacao
			} else {
				vetor[indexDivisao - 1] = parseFloat(vetor[indexDivisao - 1]) / parseFloat(vetor[indexDivisao + 1])
				index = indexDivisao
			}
			vetor.splice(index, index + 1)
		}
		
		console.log('Expressão após cálculo de todas as multiplicações e divisões: ' + [vetor])	
		return vetor
	}
	
	function calculaSomaSub(vetor) {
		let index = 0
		while (vetor.indexOf('+') !== -1 || vetor.indexOf('-') !== -1) {
			let indexAdicao = vetor.indexOf('+') === -1 ? Infinity : vetor.indexOf('+')
			let indexSubtracao = vetor.indexOf('-') === -1 ? Infinity : vetor.indexOf('-')
			
			if(indexAdicao < indexSubtracao) {
				vetor[indexAdicao - 1] = parseFloat(vetor[indexAdicao - 1]) + parseFloat(vetor[indexAdicao + 1])
				index = indexAdicao
			} else {
				vetor[indexSubtracao - 1] = parseFloat(vetor[indexSubtracao - 1]) - parseFloat(vetor[indexSubtracao + 1])
				index = indexSubtracao
			}
			vetor.splice(index, index + 1)
		}
		
		console.log('Expressão após cálculo de todas as adições e subtrações: ' + [vetor])	
		return vetor
	}

	const opcaoBotao = {
		'AC': function () {
			setVisorResultado('0')
			setVisorOperacao('0')
			setTipoUltimoValor('número')
		},
		'DEL': function () {
			deletaUltimoValor()
			setTipoUltimoValor('número')
		},
		'MUDA': function () {
		},
		'0': function () {
			atualizaVisor('0', 'número')
		},
		'1': function () {
			atualizaVisor('1', 'número')
		},
		'2': function () {
			atualizaVisor('2', 'número')
		},
		'3': function () {
			atualizaVisor('3', 'número')
		},
		'4': function () {
			atualizaVisor('4', 'número')
		},
		'5': function () {
			atualizaVisor('5', 'número')
		},
		'6': function () {
			atualizaVisor('6', 'número')
		},
		'7': function () {
			atualizaVisor('7', 'número')
		},
		'8': function () {
			atualizaVisor('8', 'número')
		},
		'9': function () {
			atualizaVisor('9', 'número')
		},
		'+': function () {
			atualizaVisor('+', 'operação')
		},
		'-': function () {
			atualizaVisor('-', 'operação')
		},
		'÷': function () {
			atualizaVisor('÷', 'operação')
		},
		'×': function () {
			atualizaVisor('×', 'operação')
		},
		'^': function () {
			atualizaVisor('^', 'operação')
		},
		'.': function () {
			if (flagDecimal === false) {
				atualizaVisor('.', 'operação')
				setFlagDecimal(true)
			}
		},
		'=': function () {
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
