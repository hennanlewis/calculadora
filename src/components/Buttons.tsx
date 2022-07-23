interface ButtonsProps {
	handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Buttons = ({ handleClickButton }: ButtonsProps) => {
	const buttons = [
		{ name: "AC", className: "bg-red-900/60 hover:brightness-125 rounded-l-lg" },
		{ name: "del", className: "bg-red-900/60 hover:brightness-125" },
		{ name: " ", className: "bg-red-900/60" },
		{ name: "^", className: "bg-red-900/60 hover:brightness-125 rounded-tr-lg" },
		{ name: "7", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "8", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "9", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "/", className: "bg-red-900/60 hover:brightness-125" },
		{ name: "4", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "5", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "6", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "*", className: "bg-red-900/60 hover:brightness-125" },
		{ name: "1", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "2", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "3", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "-", className: "bg-red-900/60 hover:brightness-125" },
		{ name: "=", className: "bg-red-900/60 hover:brightness-125 rounded-lg" },
		{ name: "0", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: ".", className: "bg-red-900/60 hover:brightness-125 rounded-l-lg" },
		{ name: "+", className: "bg-red-900/60 hover:brightness-125 rounded-br-lg" }
	]

	return (
		<div className="grid grid-cols-4">
			{buttons.map(item =>
				<button
					key={item.name}
					className={item.className}
					onClick={handleClickButton}
				>
					{item.name}
				</button>
			)}
		</div>
	)
}