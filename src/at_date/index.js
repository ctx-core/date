/**
 * @param time{number}
 * @returns {Date}
 */
export function at_date(time) {
	const date = new Date()
	date.setTime(time)
	return date
}
