function decode(message) {
  // Code here
 let result = ''
 let stack  = []
 
 for(const le of message){
   if(le == '('){
     stack.push(result)
     result = ''
   }else if(le == ')') 
     result = stack.pop() + result.split('').reverse().join('')
   else result += le
 }
  
  return result
  
}

