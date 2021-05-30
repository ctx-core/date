import { yyyymmdd_ } from './yyyymmdd_'
import { pad2 } from './pad2'
export function yyyymmddhhmmss_(date?:Date) {
	date = date || new Date()
	return yyyymmdd_(date) +
		pad2(date.getHours()) +
		pad2(date.getMinutes()) +
		pad2(date.getSeconds())
}
export {
	yyyymmddhhmmss_ as _yyyymmddhhmmss,
}
