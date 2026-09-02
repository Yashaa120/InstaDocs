import { MonthPeriod } from '../types';

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const MONTH_SHORT_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function getLastDayOfMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function formatDateDisplay(day: number, monthIndex: number, year: number): string {
  const dayStr = day < 10 ? `0${day}` : `${day}`;
  return `${dayStr} ${MONTH_NAMES[monthIndex]} ${year}`;
}

export function generateReceiptPeriods(
  isMultiMonth: boolean,
  singleMonth: number,
  singleYear: number,
  startMonth: number,
  startYear: number,
  endMonth: number,
  endYear: number,
  receiptNoPrefix = 'RR'
): MonthPeriod[] {
  const periods: MonthPeriod[] = [];

  if (!isMultiMonth) {
    const lastDay = getLastDayOfMonth(singleYear, singleMonth);
    periods.push({
      monthIndex: singleMonth,
      monthName: MONTH_NAMES[singleMonth],
      year: singleYear,
      receiptNumber: `${receiptNoPrefix}-${singleYear}-${String(singleMonth + 1).padStart(2, '0')}`,
      receiptDate: formatDateDisplay(lastDay, singleMonth, singleYear),
      startDate: formatDateDisplay(1, singleMonth, singleYear),
      endDate: formatDateDisplay(lastDay, singleMonth, singleYear),
    });
    return periods;
  }

  // Multi-month iteration
  let currentYear = startYear;
  let currentMonth = startMonth;
  let count = 1;

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    const lastDay = getLastDayOfMonth(currentYear, currentMonth);
    periods.push({
      monthIndex: currentMonth,
      monthName: MONTH_NAMES[currentMonth],
      year: currentYear,
      receiptNumber: `${receiptNoPrefix}-${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`,
      receiptDate: formatDateDisplay(lastDay, currentMonth, currentYear),
      startDate: formatDateDisplay(1, currentMonth, currentYear),
      endDate: formatDateDisplay(lastDay, currentMonth, currentYear),
    });

    count++;
    if (count > 36) {
      // Safety guard against infinite loops
      break;
    }

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return periods.length > 0 ? periods : [{
    monthIndex: singleMonth,
    monthName: MONTH_NAMES[singleMonth],
    year: singleYear,
    receiptNumber: `${receiptNoPrefix}-${singleYear}-${String(singleMonth + 1).padStart(2, '0')}`,
    receiptDate: formatDateDisplay(getLastDayOfMonth(singleYear, singleMonth), singleMonth, singleYear),
    startDate: formatDateDisplay(1, singleMonth, singleYear),
    endDate: formatDateDisplay(getLastDayOfMonth(singleYear, singleMonth), singleMonth, singleYear),
  }];
}
