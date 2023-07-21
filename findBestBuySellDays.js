function findBestBuySellDays(prices) {
  if (prices.length < 2) {
    return null // if it's not enough elements to find buyDay and sellDay return null
  }

  let minPrice = prices[0]
  // min price that we should buy,
  // then we'll sell it when it becomes high price to get the best profit
  let maxProfit = 0
  let buyDay = 0
  let sellDay = 0

  for (let day = 1; day < prices.length; day++) {
    if (prices[day] < minPrice) {
      // If the current price (prices[i]) is less than the minPrice,
      // it means we've found a new minimum price
      minPrice = prices[day]
      buyDay = day
    } else if (prices[day] - minPrice > maxProfit && day > buyDay) {
      // If the price of the day higher than minPrice
      // Subtract the price of the day with minPrice to find the profit
      // Is the profit higher than maxProfit?
      // day > buyDay : And is the day is in the future? (compare with the day of minPrice)

      // If all are true that means we've got the good price to sell the stock
      // So, we will update the new high profit to maxProfit
      // and update the day that we've got the profit to sellDay
      maxProfit = prices[day] - minPrice
      sellDay = day
    }
  }

  return maxProfit > 0 ? `buy day${buyDay + 1} | sell day${sellDay + 1}` : null
}

const prices1 = [8, 2, 6, 4, 7, 5]
const prices2 = [8, 7, 6, 5, 4, 3]

const result = findBestBuySellDays(prices1)
const result2 = findBestBuySellDays(prices2)

console.log(result) // Output: buy day2 | sell day5
console.log(result2) // Output: null
