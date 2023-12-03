function findNaughtyStep(original, modified) {
    // Code here
    const len = Math.max(original.length, modified.length)
    for(let i = 0; i < len; i++){
      const currentMod = modified[i]
      const currentOri = original[i]
  
     if(!currentOri || original.indexOf(currentMod) === -1) 
        return currentMod
      if(!currentOri ||modified.indexOf(currentOri) === -1) 
        return currentOri
      
    }
    
    return ''
  }