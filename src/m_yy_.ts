export function m_yy_(date?:Date):string {
	date = date || new Date()
	return `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
}
export {
	m_yy_ as _m_yy,
}
