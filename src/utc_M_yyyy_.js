import { abbrev_month_a } from './abbrev_month_a';
export function utc_M_yyyy_(date) {
    date = date || new Date();
    return `${abbrev_month_a[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
export { utc_M_yyyy_ as _utc_M_yyyy, utc_M_yyyy_ as _M_yyyy__utc, };
//# sourceMappingURL=src/utc_M_yyyy_.js.map