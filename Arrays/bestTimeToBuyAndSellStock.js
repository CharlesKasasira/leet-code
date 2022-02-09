/**
 * 121. Best Time to Buy and Sell Stock
Easy
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:
* 1 <= prices.length <= 105
* 0 <= prices[i] <= 104
Accepted
1,842,377
Submissions
3,446,859


Seen this question in a real interview before?
 */

/**
 * @param {number[]} prices
 * @returns {number} // maximum_profit or 0
 */


// check if the PREVIOUS VALUE includes a stock which when subtracted with the current stock (prices[i]) provides a profit higher than the saved. else we set the stock

//stock > prices[i+1] - prices[i]

/**
 * for(let i;)
 *      if prev.has(value)
 */

/* const bestTimeToBuyAndSellStock = prices => {

} */

// store the previous values and check if it is smaller than the next value
// loop w