export function _m_yy(date?:Date) {
	date = date || new Date()
	return `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
}
