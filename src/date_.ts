export const date_:Date__T =
	(...arg_a:[]|[number|string|Date]|[number, number, number?, number?, number?, number?, number?])=>
		new Date(...(arg_a as []))
export interface Date__T {
	():Date
	(value:number|string|Date):Date
	(year:number, month:number, date?:number, hours?:number, minutes?:number, seconds?:number, ms?:number):Date
}
export {
	date_ as _date,
}
