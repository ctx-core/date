import { toLocalDateString } from './toLocalDateString.js'
export function date_append_local_tz_(date_txt: string):Date {
  return new Date(`${date_txt} (${toLocalDateString()})`)
}
export {
  date_append_local_tz_ as _date_append_local_tz,
}
