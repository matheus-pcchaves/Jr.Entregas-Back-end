interface IDateProvider {
    compareInDays(start_date: Date, end_date: Date): number
    compareInHours(start_date: Date, end_date: Date): number
    convertToUTC(date: Date): string
    dateNow(): Date
}

export { IDateProvider }