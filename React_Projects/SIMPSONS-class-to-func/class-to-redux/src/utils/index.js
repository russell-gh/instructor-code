export function findCharacterIndex(apiData, test) {
  return apiData.findIndex((item) => {
    return item.quote === test || item.character === test;
  });
}

export function findLikeIndex(apiData, name) {
  return apiData.findIndex((item) => {
    return item.character === name;
  });
}
