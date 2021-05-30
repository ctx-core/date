import { abbrev_month_a } from './abbrev_month_a'
export function M_yyyy_(date?:Date) {
	date = date || new Date()
	return `${abbrev_month_a[date.getMonth()]} ${date.getFullYear()}`
}
export {
	M_yyyy_ as _M_yyyy,
}
