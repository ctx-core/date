import { milliseconds_ } from './milliseconds_';
export function seconds_(date = new Date()) {
    return milliseconds_(date) / 1000;
}
export { seconds_ as _seconds, };
//# sourceMappingURL=src/seconds_.js.map