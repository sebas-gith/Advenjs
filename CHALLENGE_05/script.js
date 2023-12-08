function cyberReindeer(road, time) {
  const roads = []
  let roda = road.replace('S', '.')
  const asteric = roda.replaceAll('|', '*')
  let sPosition = 0
  for(let i in [...new Array(time)]){
    if(i == 5) roda = asteric
    let slice1 = roda.slice(0, sPosition);
    let slice2 = roda.slice(sPosition+1)
    roads.push(`${slice1}S${slice2}`)
    sPosition =     !(i < 4 && roda[sPosition+1] == '|') ? 
    sPosition+1  : 
    sPosition
  }
  return roads
}