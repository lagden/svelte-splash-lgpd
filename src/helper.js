export function parseBooleans(v) {
	const boolRegex = /^(?:true|false|1|0)$/i
	if (boolRegex.test(v)) {
		v = v.toLowerCase() === 'true' || v === '1'
	}
	return v
}

export function fix(transtion) {
	return (node, params) => {
		Object.defineProperty(node, 'ownerDocument', {
			get() {
				return {
					head: node.parentNode,
				}
			},
		})
		return transtion(node, params)
	}
}
