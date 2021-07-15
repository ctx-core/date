import { pad2 } from './pad2.js'
export function utc_yyyymmdd_(date?:Date) {
	date = date || new Date()
	return date.getUTCFullYear() +
		pad2(date.getUTCMonth() + 1) +
		pad2(date.getUTCDate())
}
export {
	utc_yyyymmdd_ as _utc_yyyymmdd,
	utc_yyyymmdd_ as _yyyymmdd__utc,
}
