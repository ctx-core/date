import { ms_ } from './ms_.js'
export function seconds_(date = new Date()):number {
  return ms_(date) / 1000
}
export {
  seconds_ as _seconds,
}
