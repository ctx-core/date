import { milliseconds_ } from './milliseconds_.js'
export function seconds_(date = new Date()):number {
  return milliseconds_(date) / 1000
}
export {
  seconds_ as _seconds,
}
