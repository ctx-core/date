import { pad2 } from './pad2';
import { month_a } from './month_a';
export function MM_yyyy_(date) {
    date = date || new Date();
    return `${month_a[date.getMonth()]} ${date.getFullYear()}`;
}
export function mm_yyyy_(date) {
    date = date || new Date();
    return `${pad2(date.getMonth() + 1)}/${date.getFullYear()}`;
}
export { MM_yyyy_ as _MM_yyyy, mm_yyyy_ as _mm_yyyy, };
//# sourceMappingURL=src/m_m_yyyy_.js.map