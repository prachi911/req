import * as dateUtil from './dateUtil.js';

const leapYear = 2024;
const nonLeapYear = 2023;

console.log(`${leapYear} is a leap year: ${dateUtil.isLeapYear(leapYear)}`);
console.log(`${nonLeapYear} is a leap year: ${dateUtil.isLeapYear(nonLeapYear)}`);