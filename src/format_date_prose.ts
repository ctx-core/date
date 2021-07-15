import { month_a } from './month_a.js'
import { pad2 } from './pad2.js'
export function format_date_prose(date?:Date) {
	date = date || new Date()
	return `${month_a[date.getMonth()]} ${pad2(date.getDate())}, ${date.getFullYear()}`
}
