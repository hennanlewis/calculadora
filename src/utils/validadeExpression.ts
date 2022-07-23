export const validateExpression = (str: string) =>
	str.replace(
		/(\d*\.)([\d.]+)/g,
		(_, g1, g2) => g1 + g2.replace(/\./g, "")
	)
		.replace(/([+-/*])/g, "$1")
		.replace(/(^\.)/g, "0.")
		.replace(/([+-/*])\./g, "$10.")
		.replace(/\.([+-/*])/g, "$1")
		.replace(/([-+/*^]){2,}/g, "$1")
