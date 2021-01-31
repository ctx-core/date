import { _utc_yyyymmdd } from './_utc_yyyymmdd'
import { pad2 } from './pad2'
export function _utc_yyyymmddhhmmss(date?) {
	date = date || new Date()
	return _utc_yyyymmdd(date) +
		pad2(date.getUTCHours()) +
		pad2(date.getUTCMinutes()) +
		pad2(date.getUTCSeconds())
}
export {
	_utc_yyyymmddhhmmss as _yyyymmddhhmmss__utc
}
