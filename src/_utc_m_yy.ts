export function _utc_m_yy(date?:Date) {
	date = date || new Date()
	return `${date.getUTCMonth() + 1}/${date.getUTCFullYear().toString().slice(2)}`
}
export {
	_utc_m_yy as _m_yy__utc
}
