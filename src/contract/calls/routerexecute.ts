import { useCallback, useMemo, useState } from "react";
import { useContract, useContractWrite, useProvider, useSigner } from "wagmi";
import routerABI from "../abis/SignalRouterSystem.json";
import { espgoerli } from "../../ref/addresses";
import { BigNumber, Bytes } from "ethers";
import { chainId } from "../../ref/chain";

const enum callSignature {
	execute = "execute"
}

export const execute = (_data: string) => {
	const args = useMemo(() => [_data], [_data]);

	const { data, isError, isLoading, writeAsync } = useContractWrite({
		addressOrName: espgoerli.router,
		contractInterface: routerABI,
		functionName: callSignature.execute,
		chainId: chainId.goerli,
		// overrides: { gasLimit: 1e7 },
		args: args,
		onError(error) {
			console.log("Error", error);
		},
		onSuccess(data) {
			console.log("Success", data);
		}
	});
	const fireExecute = useCallback(async () => {
		try {
			await writeAsync();
		} catch (e) {
			console.log(e);
		}
	}, [writeAsync]);

	return fireExecute;
};