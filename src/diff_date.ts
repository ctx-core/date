export function diff_date(diff:number):Date {
	const now = new Date()
	now.setTime(now.valueOf() + diff)
	return now
}
