export function diff_date(diff:number) {
	const now = new Date()
	now.setTime(now.valueOf() + diff)
	return now
}
