function maxDistance(movements) {
  // Code here
  let steps = 0
  for(const step of movements){
    if(step == '>')
     steps++
    else if(step == '<') 
      steps--
    else if(step == "*" && steps >= -1) 
      steps++
    else 
      steps--
  }

  let abs = Math.abs(steps)
  return abs
}
