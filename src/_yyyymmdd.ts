import { pad2 } from './pad2'
export function _yyyymmdd(date?:Date) {
	date = date || new Date()
	return date.getFullYear() +
		pad2(date.getMonth() + 1) +
		pad2(date.getDate())
}
