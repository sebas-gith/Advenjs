function drawGift(size, symbol) {
  const n = size
  if(n <= 1)
    return '#\n'
  
  let result = ' '.repeat(n-1) + '#'.repeat(n) + '\n'
  //parte de arriba
  for(let i = 0; i < n - 2; i++){
     const blank = ' '.repeat(n-i-2)+'#'
     const simbo = symbol.repeat(Math.ceil(n-2)) 
     const line = blank + simbo + '#' + symbol.repeat(i)
     result += line + '#'+'\n'
  }
  result += '#'.repeat(n) + symbol.repeat(n-2) + '#'+ '\n'
  //parte de abajo
  for(let i = 0; i < n - 2; i++){
     let simbo = '#' + symbol.repeat(Math.ceil(n-2)) 
     let line = simbo + '#' + symbol.repeat(n- i - 3) + '#'
     result += line +'\n'
  }  
  result += '#'.repeat(n) + '\n'
  return result
}