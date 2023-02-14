import { toLocalDateString } from '../toLocalDateString/index.js'
/**
 * @param date_txt{string}
 * @returns {Date}
 */
export function date_append_local_tz_(date_txt) {
	return new Date(`${date_txt} (${toLocalDateString()})`)
}
export { date_append_local_tz_ as _date_append_local_tz, }
