<script>
import { _date_append_local_tz } from './lib'
import Date from './Date.svelte'
export let date
</script>

<Date date="{_date_append_local_tz(date)}"></Date>
