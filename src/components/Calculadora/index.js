import React, { useState } from 'react'

import Botoes from '../Botoes'

import botoes from '../../services/botoes'
import './style.css'

export function Calculadora() {
	const [visorOperacao, setVisorOperacao] = useState('0')
	const [visorResultado, setVisorResultado] = useState('0')
	const [tipoUltimoValor, setTipoUltimoValor] = useState('')

	function handleBotao(entrada) {
		console.log('Botão ' + entrada + ' pressionado')
		let pressionaBotao = opcaoBotao[entrada]
		pressionaBotao && pressionaBotao()
		console.log(visorOperacao)
	}
	
	function atualizaVisor(valor, tipoValor) {
		let tamanhoVetor = tipoUltimoValor.length
		if((visorOperacao + valor).match(/.\.+\d+\./g))
			return

		if (tipoValor === 'operação' && 'operação' === tipoUltimoValor[tamanhoVetor - 1]) {
			deletaUltimoValor()
		}

		visorOperacao === '0'
			? setVisorOperacao(valor)
			: setVisorOperacao(valorAnterior => valorAnterior + valor)

		setTipoUltimoValor([...tipoUltimoValor, tipoValor])
	}

	function deletaUltimoValor() {
		let tamanhoVetor = visorOperacao.length
		if (visorOperacao.length < 2) {
			setVisorOperacao('0')
			setTipoUltimoValor()
			return
		}

		setVisorOperacao(valorAnterior => valorAnterior.slice(0, tamanhoVetor - 1))
		setTipoUltimoValor(valorAnterior => valorAnterior.slice(0, tamanhoVetor - 1))
	}

	function calculaResultado() {
		let tamanho = tipoUltimoValor.length
		let valores = visorOperacao.replaceAll(/(\+|-|÷|×|\^)/g, ' $1 ')
		valores = valores.split(' ')

		if(tipoUltimoValor[tamanho - 1] === 'operação') {
			deletaUltimoValor()
			valores.splice(-2)
		}

		console.log(valores)
		valores = calculaExponenciacao(valores)
		valores = calculaMultiDivi(valores)
		valores = calculaSomaSub(valores)
		setVisorResultado(valores)
		setVisorOperacao('0')
	}
	
	function calculaExponenciacao(vetor) {
		let index = 0
		while (vetor.indexOf('^') !== -1) {
			index = vetor.indexOf('^')
			vetor[index - 1] = Math.pow(parseFloat(vetor[index - 1]), parseFloat(vetor[index + 1]))
			vetor.splice(index, index + 1)
		}
		return vetor
	}
	
	function calculaMultiDivi(vetor) {
		let index = 0
		while (vetor.indexOf('÷') !== -1 || vetor.indexOf('×') !== -1) {
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
			visorOperacao === '0'
				? atualizaVisor('0+', 'operação')
				: atualizaVisor('+', 'operação')
		},
		'-': function () {
			visorOperacao === '0'
				? atualizaVisor('0-', 'operação')
				: atualizaVisor('-', 'operação')
		},
		'÷': function () {
			visorOperacao === '0'
				? atualizaVisor('0÷', 'operação')
				: atualizaVisor('÷', 'operação')
		},
		'×': function () {
			visorOperacao === '0'
				? atualizaVisor('0×', 'operação')
				: atualizaVisor('×', 'operação')
		},
		'^': function () {
			visorOperacao === '0'
				? atualizaVisor('0^', 'operação')
				: atualizaVisor('^', 'operação')
		},
		'.': function () {
			let tamanho = visorOperacao.length
			if(visorOperacao === '0') {
				atualizaVisor('0.', 'operação')
				return
			}

			if(visorOperacao[tamanho - 1] === '+' || visorOperacao[tamanho - 1] === '-') {
				atualizaVisor(visorOperacao[tamanho - 1] + '0.', 'operação')
				return
			}
				
			atualizaVisor('.', 'operação')
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
