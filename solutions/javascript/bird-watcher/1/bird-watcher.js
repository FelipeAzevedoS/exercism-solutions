// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let index = 0; index < birdsPerDay.length; index+= 1){
    total += birdsPerDay[index];
  }
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  const firstIndex = week * 7 - 7;
  const lastIndex = firstIndex + 7;
    
  for (let index = firstIndex; index < lastIndex; index+= 1){
    total += birdsPerDay[index];
  }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let index = 0; index < birdsPerDay.length; index += 1){
    if (index % 2 === 0) birdsPerDay[index] += 1;
  }
  return birdsPerDay;
}
