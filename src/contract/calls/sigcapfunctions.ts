import { useCallback, useMemo, useState } from "react";
import { useContract, useContractWrite, useProvider, useSigner } from "wagmi";
import sigcapABI from "../abis/SignalCapital.json";
import { sigcapAddress } from "../../ref/addresses";
import { BigNumber } from "ethers";

const enum callSignature {
	addAccount = "addAccount",
	addNewSignal = "addNewSignal",
	signalExisting = "signalExisting",
	withdrawPoints = "withdrawPoints"
}

export const useAddAccount = (name: string) => {
	const args = useMemo(() => [name], [name]);

	const { data, isError, isLoading, writeAsync } = useContractWrite({
		addressOrName: sigcapAddress,
		contractInterface: sigcapABI,
		functionName: callSignature.addAccount,
		// overrides: { gasLimit: 1e7 },
		args: args,
		onError(error) {
			console.log("Error", error);
		},
		onSuccess(data) {
			console.log("Success", data);
		}
	});

	const fireAddAccount = useCallback(async () => {
		try {
			await writeAsync();
		} catch (e) {
			console.log(e);
		}
	}, [writeAsync]);

	return fireAddAccount;
};

export const useAddNewSignal = (name: string, points: number) => {
	const args = useMemo(() => [name, BigNumber.from(points)], [name, points]);

	const { data, isError, isLoading, writeAsync } = useContractWrite({
		addressOrName: sigcapAddress,
		contractInterface: sigcapABI,
		functionName: callSignature.addNewSignal,
		// overrides: { gasLimit: 1e7 },
		args: args,
		onError(error) {
			console.log("Error", error);
		},
		onSuccess(data) {
			console.log("Success", data);
		}
	});

	const fireAddNewSignal = useCallback(async () => {
		try {
			await writeAsync();
		} catch (e) {
			console.log(e);
		}
	}, [writeAsync]);

	return fireAddNewSignal;
};

export const useSignalExisting = (name: string, points: number) => {
	const args = useMemo(() => [name, BigNumber.from(points)], [name, points]);

	const { data, isError, isLoading, writeAsync } = useContractWrite({
		addressOrName: sigcapAddress,
		contractInterface: sigcapABI,
		functionName: callSignature.signalExisting,
		// overrides: { gasLimit: 1e7 },
		args: args,
		onError(error) {
			console.log("Error", error);
		},
		onSuccess(data) {
			console.log("Success", data);
		}
	});

	const fireAddSignalExisting = useCallback(async () => {
		try {
			await writeAsync();
		} catch (e) {
			console.log(e);
		}
	}, [writeAsync]);

	return fireAddSignalExisting;
};

export const useWithdrawPoints = (name: string, points: number) => {
	const args = useMemo(() => [name, BigNumber.from(points)], [name, points]);

	const { data, isError, isLoading, writeAsync } = useContractWrite({
		addressOrName: sigcapAddress,
		contractInterface: sigcapABI,
		functionName: callSignature.withdrawPoints,
		// overrides: { gasLimit: 1e7 },
		args: args,
		onError(error) {
			console.log("Error", error);
		},
		onSuccess(data) {
			console.log("Success", data);
		}
	});

	const fireWithdrawPoints = useCallback(async () => {
		try {
			await writeAsync();
		} catch (e) {
			console.log(e);
		}
	}, [writeAsync]);

	return fireWithdrawPoints;
};
