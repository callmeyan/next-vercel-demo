import dayjs from "dayjs";

export default {
    now: () => dayjs().format(' YYYY-MM-DD HH:mm:ss')
}