import { pad2 } from './pad2.js'
import { month_a } from './month_a.js'
export function format_date_prose(date?:Date):string {
	date = date || new Date()
	return `${month_a[date.getMonth()]} ${pad2(date.getDate())}, ${date.getFullYear()}`
}
