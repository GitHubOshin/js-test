/*
จงเขียนโปรแกรมเพื่อแจกเงินจำนวน x บาท ให้คน n คน 

โดยแจกด้วยวิธีนี้
 - เราจะแจกเงินให้คนที่หนึ่ง 1 บาท, คนที่สอง   2 บาท, คนที่ n n บาท 
 - ถ้าเงินยังไม่หมด จะวนมาให้เงินทุกคนอีกรอบ โดย... 
   รอบที่สองจะให้เงินคนที่หนึ่ง 1+1 บาท, คนที่สอง 2+1 ,... คนที่ n n+1 บาท 
   รอบที่สามจะให้เงินที่คนที่หนึ่ง 1+2 บาท, คนที่สอง 2+2 บาท, ….. คนที่ n n+2 บาท
   วนแจกด้วยวิธีนี้จนเงินหมด แล้วรีเทิร์นอะเรย์ของจำนวนเงินที่แต่ละคนได้ 
ตัวอย่าง
Input: x = 21 , n = 5
รอบแรกได้เงินคนละ {1,2,3,4,5}
รอบที่สองได้เงินคนละ {2,3,1,0,0}
ดังนั้นผลลัพท์รีเทิร์น {3,5,4,4,5}
*/

function handTheMoney(balance, headCount) {
  const heads = Array.from({ length: headCount }, () => [])
  let round = 0

  for (let person = 1; balance > 0; person++) {
    const index = person - 1
    const roundMoney = person + round

    heads[index].push(balance > roundMoney ? roundMoney : balance)
    balance -= roundMoney

    if (person === headCount) {
      person = 0
      round += 1
    }
  }

  return heads.map((receivedMoneyList) => {
    return receivedMoneyList.reduce((acc, money) => acc + money, 0)
  })
}

console.log('result:', handTheMoney(21, 5)) // result: [3, 5, 4, 4, 5]
