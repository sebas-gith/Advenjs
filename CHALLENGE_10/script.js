function createChristmasTree(ornaments, height) {
  const len =  ornaments.length;
  let result = ''
  let delimiter = 0;
  for(let i = 1; i <= height; i++){
    let line = ''
    for(let j = 0; j < i; j++){
      if(delimiter >= len) delimiter = 0 
      line += ornaments[delimiter] + ' '
      delimiter++
    }   
    result += ' '.repeat(height-i) + line.slice(0, -1) + '\n'
  }
  result += ' '.repeat(height-1) + '|\n'
  return result
}