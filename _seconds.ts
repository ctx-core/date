import { _milliseconds } from './_milliseconds'
export function _seconds(date = new Date()) {
  return _milliseconds(date) / 1000
}
