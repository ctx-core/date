import { month_a1 } from './month_a1'
import { pad2 } from './pad2'
export function format_date_prose(date?:Date) {
	date = date || new Date()
	return `${month_a1[date.getMonth()]} ${pad2(date.getDate())}, ${date.getFullYear()}`
}
