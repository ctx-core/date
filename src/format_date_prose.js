import { month_a } from './month_a';
import { pad2 } from './pad2';
export function format_date_prose(date) {
    date = date || new Date();
    return `${month_a[date.getMonth()]} ${pad2(date.getDate())}, ${date.getFullYear()}`;
}
//# sourceMappingURL=src/format_date_prose.js.map