/*
 * Writing programming interview questions hasn't made me rich yet... so I might give up and start trading Apple stocks all day instead.
 *
 * First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
 *
 * So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:
 *
 * The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
 * The values are the price (in US dollars) of one share of Apple stock at that time.
 * So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
 *
 * Write an efficient function that takes stockPrices and returns the best profit
 * I could have made from one purchase and one sale of one share of Apple stock yesterday.
*/

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("Getting a profit requires at least 2 prices");
  }

  let min = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];
  for (let i = 1; i < stockPrices.length; i++) {
    const current = stockPrices[i];
    maxProfit = Math.max(maxProfit, current - min);
    min = Math.min(min, current);
  }

  return maxProfit;
}

// console.log(getMaxProfit([1, 5, 3, 2]));
// console.log(getMaxProfit([1, 1, 1, 1]));
// console.log(getMaxProfit([9, 7, 4, 1]));
