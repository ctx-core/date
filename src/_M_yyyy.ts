import { abbrev_month_a1 } from './abbrev_month_a1'
export function _M_yyyy(date?:Date) {
	date = date || new Date()
	return `${abbrev_month_a1[date.getMonth()]} ${date.getFullYear()}`
}
