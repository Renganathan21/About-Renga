/**
 * Calculates professional experience dynamically from work start date: June 1, 2023.
 * Automatically updates over time so manual updates are never required.
 */

// Career start date: June 1, 2023
export const WORK_START_DATE = new Date("2023-06-01T00:00:00");

export interface ExperienceCalculation {
  totalMonths: number;
  exactYears: number;
  years: number; // rounded to 1 decimal place
  formattedYears: string; // e.g. "3.3" or "3"
  displayPlus: string; // e.g. "3.3+"
  displayYears: string; // e.g. "3.3+ Years"
  displayFull: string; // e.g. "3.3+ Years of Frontend Development"
}

export function getExperienceDetails(currentDate: Date = new Date()): ExperienceCalculation {
  const startYear = WORK_START_DATE.getFullYear();
  const startMonth = WORK_START_DATE.getMonth(); // 5 (0-indexed for June)
  const startDay = WORK_START_DATE.getDate(); // 1

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let months = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  if (currentDay < startDay) {
    months -= 1;
  }
  months = Math.max(0, months);

  const exactYears = months / 12;
  const roundedYears = Math.round(exactYears * 10) / 10;
  const formattedYears = roundedYears % 1 === 0 ? roundedYears.toFixed(0) : roundedYears.toFixed(1);

  return {
    totalMonths: months,
    exactYears,
    years: roundedYears,
    formattedYears,
    displayPlus: `${formattedYears}+`,
    displayYears: `${formattedYears}+ Years`,
    displayFull: `${formattedYears}+ Years of Frontend Development`,
  };
}
