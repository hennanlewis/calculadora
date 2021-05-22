import React from 'react'

export function Botoes(props) {

	return (
		<button tipo={props.tipo} className={props.classe} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Botoes