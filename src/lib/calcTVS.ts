export const calcTVS = (
  lastUpdatedTime: number,
  currentTime: number,
  currentWeight: number,
  loggedTVS: number
) => {
  let currentTVS = loggedTVS + (currentTime - lastUpdatedTime) * currentWeight;
  return currentTVS;
};
