import { pad2 } from './pad2'
import { month_a1 } from './month_a1'
export function _MM_yyyy(date?:Date) {
	date = date || new Date()
	return `${month_a1[date.getMonth()]} ${date.getFullYear()}`
}
export function _mm_yyyy(date?:Date) {
	date = date || new Date()
	return `${pad2(date.getMonth() + 1)}/${date.getFullYear()}`
}
