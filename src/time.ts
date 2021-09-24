export enum TimePeriod {
    MORNING = "MORNING",
    DAY = "DAY",
    EVENING = "EVENING",
    NIGHT = "NIGHT"
};

export function getTimePeriod(): TimePeriod {
    const hour = new Date().getHours();

    if (hour < 7) return TimePeriod.NIGHT;
    if (hour < 10) return TimePeriod.MORNING;
    if (hour < 18) return TimePeriod.DAY;
    if (hour < 22) return TimePeriod.EVENING;
    return TimePeriod.NIGHT;
}
