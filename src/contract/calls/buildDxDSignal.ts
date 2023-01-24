import { useCallback, useMemo, useState } from "react";
import { BigNumber, Bytes, ethers, BytesLike } from "ethers";
import { Stream } from "stream";

export const useBuildDxDSignal = (
	stream: number,
	topLevelAddress: string,
	points: number,
	signal: string,
	add: boolean
) => {
	const args = useMemo(
		() => [stream, topLevelAddress, points, signal, add],
		[stream, topLevelAddress, points, signal, add]
	);
	let coder = new ethers.utils.AbiCoder();
	let ret = coder.encode(
		["uint256", "address", "bytes"],
		[
			args[0],
			args[1],
			coder.encode(["uint256", "string", "bool"], [args[2], args[3], args[4]])
		]
	);
	return ret;
};
