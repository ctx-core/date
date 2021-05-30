import { pad2 } from './pad2'
import { month_a } from './month_a'
export function utc_MM_yyyy_(date?:Date) {
	date = date || new Date()
	return `${month_a[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}
export function utc_mm_yyyy_
(date?:Date) {
	date = date || new Date()
	return `${pad2(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`
}
export {
	utc_MM_yyyy_ as _utc_MM_yyyy,
	utc_MM_yyyy_ as _MM_yyyy__utc,
	utc_mm_yyyy_ as _utc_mm_yyyy,
	utc_mm_yyyy_ as _mm_yyyy__utc,
}
