function organizeGifts(gifts) {
  const letters = []
  const numbers  =  []
  let relleno = ''
  for(let g of gifts){
    relleno += g
    if(isNaN(+g)){
      letters.push(g)
      numbers.push(relleno.slice(0, -1))
      relleno = ''
    }

  }

  const complete = []
  for(let i in numbers){
    const currentN = +numbers[i]
    const currentL = letters[i]
    const currentB = Math.floor(currentN / 50 )
    const curretT = Math.floor(currentN % 50 / 10)
    const currentP = currentN % 50 % 10
    complete.push(`[${currentL}]`.repeat(currentB), 
                  `{${currentL}}`.repeat(curretT))
    complete.push(currentP != 0 ?
                  '(' +`${currentL}`.repeat(currentP) + ')' :
                  '')
  }
  
  return complete.join('')
}