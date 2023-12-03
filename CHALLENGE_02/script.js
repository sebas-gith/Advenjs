function manufacture(gifts, materials) {
  //Code here
  const result = [];

  for (const gift of gifts) {
      const giftMaterials = new Set(gift);
      let canMakeGift = true;

      for (const material of giftMaterials) {
          if (!materials.includes(material)) {
              canMakeGift = false;
              break;
          }
      }

      if (canMakeGift) {
          result.push(gift);
      }
  }

  return result;
}