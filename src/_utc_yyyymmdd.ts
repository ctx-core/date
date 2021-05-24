import { pad2 } from './pad2'
export function _utc_yyyymmdd(date?:Date) {
	date = date || new Date()
	return date.getUTCFullYear() +
		pad2(date.getUTCMonth() + 1) +
		pad2(date.getUTCDate())
}
export { _utc_yyyymmdd as _yyyymmdd__utc }
