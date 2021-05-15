import { abbrev_month_a1 } from './abbrev_month_a1'
export function _utc_M_yyyy(date?:Date) {
	date = date || new Date()
	return `${abbrev_month_a1[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}
export {
	_utc_M_yyyy as _M_yyyy__utc
}
