export const calcTVS = (
	lastUpdatedTime: number,
	currentTime: number,
	currentWeight: number,
	loggedTVS: number
) => {
	console.log(lastUpdatedTime, currentTime, currentWeight, loggedTVS);
	let currentTVS = loggedTVS + (currentTime - lastUpdatedTime) * currentWeight;
	return currentTVS;
};
