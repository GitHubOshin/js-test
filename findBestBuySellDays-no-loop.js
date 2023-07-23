/*
จงเขียนโปรแกรมเพื่อหาวันที่ดีที่สุดในการซื้อ และขายหุ้น 
โดยรับ input เป็น array ของราคาหุ้นแต่ละวัน แล้วรีเทิร์นเป็น วันที่ซื้อ และวันที่ขาย 

ตัวอย่างเช่น
Input: prices = {8,2,6,4,7,5}
ผลลัพท์คือ ซื้อวันที่ 2 ขายวันที่ 5 (ได้กำไร = 7-2 บาท)
Input: prices = {8,7,6,5,4,3}
ผลลัพท์คือ null (เพราะไม่มีทางกำไร)
*/

function findBestBuySellDays(prices = []) {
   const minPrice = findMin(prices)

   const indexMin = prices.indexOf(minPrice)

   const pricesAfterMin = prices.slice(indexMin)
   const maxPrice = findMax(pricesAfterMin)

   const indexMax = prices.indexOf(maxPrice)

   const dayMin = indexMin + 1
   const dayMax = indexMax + 1

   return dayMin < dayMax ? `buy: day ${dayMin}` | `sell: day ${dayMax}` : null
}

function findMax(numbers, max = -Infinity) {
   if (numbers.length === 0) return max
   return findMax(numbers.slice(1), max > numbers[0] ? max : numbers[0])
}

function findMin(numbers, min = Infinity) {
   if (numbers.length === 0) return min
   return findMin(numbers.slice(1), min < numbers[0] ? min : numbers[0])
}
Sent 2m ago
