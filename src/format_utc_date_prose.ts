import { month_a1 } from './month_a1'
import { pad2 } from './pad2'
export function format_utc_date_prose(date?:Date) {
	date = date || new Date()
	return `${month_a1[date.getUTCMonth()]} ${pad2(date.getUTCDate())}, ${date.getUTCFullYear()}`
}
