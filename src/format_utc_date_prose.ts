import { month_a } from './month_a.js'
import { pad2 } from './pad2.js'
export function format_utc_date_prose(date?:Date):string {
	date = date || new Date()
	return `${month_a[date.getUTCMonth()]} ${pad2(date.getUTCDate())}, ${date.getUTCFullYear()}`
}
