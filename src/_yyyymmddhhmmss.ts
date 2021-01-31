import { _yyyymmdd } from './_yyyymmdd'
import { pad2 } from './pad2'
export function _yyyymmddhhmmss(date?) {
	date = date || new Date()
	return _yyyymmdd(date) +
		pad2(date.getHours()) +
		pad2(date.getMinutes()) +
		pad2(date.getSeconds())
}
