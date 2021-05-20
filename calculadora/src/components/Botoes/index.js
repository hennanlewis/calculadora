import React from 'react'

import './style.css'

export function Botoes(props) {

	return (
		<div tipo={props.tipo} className={props.classe}>
			{props.children}
		</div>
	)
}

export default Botoes