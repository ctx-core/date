import { pad2 } from './pad2'
import { month_a1 } from './month_a1'
export function _utc_MM_yyyy(date?:Date) {
	date = date || new Date()
	return `${month_a1[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}
export function _utc_mm_yyyy(date?:Date) {
	date = date || new Date()
	return `${pad2(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`
}
export {
	_utc_MM_yyyy as _MM_yyyy__utc,
	_utc_mm_yyyy as _mm_yyyy__utc,
}
