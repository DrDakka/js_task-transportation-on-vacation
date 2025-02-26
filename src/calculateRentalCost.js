/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalDayCost = 40;
  const longPeriodDiscount = 50;
  const shortPeriodDiscount = 20;
  let result = rentalDayCost * days;

  if (days >= 7) {
    result -= longPeriodDiscount;
    return result;
  };

  if (days >= 3) {
    result -= shortPeriodDiscount;
    return result;
  };

  return result;
}

module.exports = calculateRentalCost;
