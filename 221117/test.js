const commingsoon = (want,price,budget,item,bill,fixedCost,firstSpending) => {
  let wantsyou = want
  let spendingItem = item
  let spendingBill = bill
  let fatigue = 0
  let hate = 0

  const keyExtraction = (valueObject) => {
    let itemKey = []
    for(let key in valueObject){
      itemKey = itemKey + key + ','
    }
    itemKey = itemKey.split(',')
    itemKey.length = itemKey.length-1
    return itemKey
  }
  const ObjectKeyExtraction = (valueObejct) => {
    itemKey = valueObejct
    let keyValue = []
    for(let i = 0 ; i < itemKey.length ; i++){
      let singleKeyValue = itemKey[i]
      toString(singleKeyValue)
      keyValue[i] = spendingItem[singleKeyValue]
    }
    for(let i = 0 ; i < keyValue.length ; i ++){
      keyValue[i] = keyExtraction(keyValue[i])
    }
    return keyValue
  }
  itemKey = keyExtraction(spendingItem)
  toolKey = ObjectKeyExtraction(itemKey)
  
  const CostValue = () => {
    // console.log(itemKey)
    // console.log(toolKey)
    let totalCost = 0
    for(let i = 0 ; i < itemKey.length ; i ++){
      for(let j = 0 ; j < toolKey.length-1 ; j ++){
        toolValue = spendingItem[itemKey[i]][toolKey[i][j]]
        toolValue = Number(toolValue.slice(0, toolValue.length-1))
        countValue = spendingBill[itemKey[i]][toolKey[i][j]]
        countValue = Number(countValue.slice(0, countValue.length-1))
        totalCost = totalCost + (toolValue * countValue)
      }
    }
    return totalCost
  }
  
  let needMoney = price - (budget - CostValue())

  for(let i = 0 ; i < itemKey.length ; i ++){
    if(itemKey[i] === fixedCost){
      itemKey.splice(i,1)
    }
  }


  let firstSpendingLocation = 0
  for(let i = 0 ; i < itemKey.length ; i ++){
    if(itemKey[0] !== firstSpending){
      if(itemKey[i] === firstSpending){
        firstSpendingLocation = i
      }
    }
  }
  
  let toolAndValue = [[[]], [[]]]
  for(let i = 0 ; i < itemKey.length ; i ++){
        for(let j = 0 ; j < itemKey.length ; j ++){
          let tool = spendingItem[itemKey[i]][toolKey[i][j]]
          tool = Number(tool.slice(0, tool.length-1))
          let count = spendingBill[itemKey[i]][toolKey[i][j]]
          count = Number(count.slice(0, count.length-1))
          // console.log(tool, count)
          toolAndValue[i][j] = [tool, count]
        }
  }

  let target = toolAndValue[firstSpendingLocation]
  let firstValue = toolAndValue[0]

  toolAndValue[0] = target
  toolAndValue[firstSpendingLocation] = firstValue
  
  // console.log(toolAndValue)

  // console.log(needMoney)

  for(let i = 0 ; i < toolAndValue[0][0][1] ; i++){
      if(needMoney > toolAndValue[0][0][0]){
      needMoney = needMoney - toolAndValue[0][0][0]
      fatigue ++
      // console.log(needMoney)
    }
  }
  for(let i = 0 ; i < toolAndValue[0][1][1] ; i++){
      if(needMoney > toolAndValue[0][1][0]){
      needMoney = needMoney - toolAndValue[0][1][0]
      fatigue ++
    }
  }
  for(let i = 0 ; i < toolAndValue[1][0][1] ; i = i+1){
      if(needMoney > toolAndValue[1][0][0]){
      needMoney = needMoney - toolAndValue[1][0][0]
      hate ++
    }
  }
  for(let i = 0 ; i < toolAndValue[1][1][1] ; i = i+1){
    if(needMoney > toolAndValue[1][1][0]){
      needMoney = needMoney - toolAndValue[1][1][0]
      hate ++
    }
  }
  // let Bin = []
  // for(let i = 1 ; i <= itemKey.length * toolKey[0].length + 3 ; i = i+2){
  //   let dec = i
  //   let bin = dec.toString(2)
  //   Bin[i] = bin
  // }
  // for(let i = 0 ; i <= itemKey.length * toolKey[0].length + 2 ; i = i+2){
  //   let dec = i
  //   let bin = dec.toString(2)
  //   Bin[i] = bin
  // }
  
  // console.log(Bin)
  // console.log(itemKey.length * toolKey[0].length)
  // for(let i = 0 ; i < itemKey.length * toolKey[0].length ; i ++){
  //   for(let i = 0 ; i < toolAndValue[][]{}){
  //     if(needMoney > toolAndValue[][][]){
  //       needMoney = needMoney - toolAndValue[][][]

  //     }
  //   }
  // }
  console.log(needMoney)
  console.log(fatigue, hate)

  return (
    `???????????? ${fatigue}??? ?????? ???????????? ${fatigue}?????? ???????????????, ????????? ${hate}??? ??????????????? ${hate}?????? ??????????????? ${wantsyou}??? ??? ??? ?????? ?????????!`
  )
}



spendingItem = 
{
  "???????????????" : {
    "?????????????????????" : "1500???",
    "??????" : "3500???",
  },
  "??????" : {
    "?????????" : "4500???",
    "??????" : "200???",
  },
  "???????????????" : {
    "?????????" : "400???",
    "??????????????????" : "800???",
  }
}
spendingBill = 
{
  "???????????????" : {
    "?????????????????????" : "19???",
    "??????" : "3???",
  },
  "??????" : {
    "?????????" : "6???",
    "??????" : "15???",
  },
  "???????????????" : {
    "?????????" : "30???",
    "??????????????????" : "2???",
  }
}

let want = '??????????????? ??????'
let price = 64800
let budget = 100000
let fixedCost = '???????????????'
let firstSpending = '???????????????'

console.log(commingsoon(want,price,budget,spendingItem,spendingBill,fixedCost,firstSpending))