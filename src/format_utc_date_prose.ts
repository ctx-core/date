import { month_a } from './month_a'
import { pad2 } from './pad2'
export function format_utc_date_prose(date?:Date) {
	date = date || new Date()
	return `${month_a[date.getUTCMonth()]} ${pad2(date.getUTCDate())}, ${date.getUTCFullYear()}`
}
