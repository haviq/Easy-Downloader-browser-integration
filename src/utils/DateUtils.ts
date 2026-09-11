export function convertToTimeStamp(
    date: string | number | Date
): number | null {
    const result = new Date(date).valueOf()
    if (Number.isNaN(result)) {
        return null
    }
    return result
}

export function diffTime(
    a: string | number | Date,
    b: string | number | Date,
): number | null {
    const aTimestamp = convertToTimeStamp(a)
    const bTimestamp = convertToTimeStamp(b)
    if (aTimestamp === null || bTimestamp === null) {
        return null
    }
    return Math.abs(aTimestamp - bTimestamp)
}
