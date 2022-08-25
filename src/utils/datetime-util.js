export const toTimestamp = (durationSec) => {
    return new Date().getTime() + durationSec * 1000;
}