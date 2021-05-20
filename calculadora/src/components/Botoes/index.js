import React from 'react'

export function Botoes(props) {

	return (
		<button tipo={props.tipo} className={props.classe}>
			{props.children}
		</button>
	)
}

export default Botoes