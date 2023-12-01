function findFirstRepeated(gifts) {
    const seenGifts = new Set();
  
    for (let i = 0; i < gifts.length; i++) {
      if (seenGifts.has(gifts[i])) {
        return gifts[i];
      }
  
      seenGifts.add(gifts[i]);
    }
  
    return -1;
  }