function getIndexsForPalindrome(word) {
  let wo = word.split('')
  const y = word.split('').reverse().join('')
  if(y === word) return []
  for(const i in word){
    for(const j in word){
      wo[i] = wo[j]
      wo[j] = word[i]
      if(wo.join('') === wo.reverse().join('')) 
        return [+i, +j]
      wo = word.split('')
    }
  }
  
  return null
}