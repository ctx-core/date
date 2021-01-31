import { toLocalDateString } from './toLocalDateString'
export function _date_append_local_tz(date_txt: string) {
  return new Date(`${date_txt} (${toLocalDateString()})`)
}
