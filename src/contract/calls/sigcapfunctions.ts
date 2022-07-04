import { useCallback, useMemo, useState } from 'react';
import { useContract, useContractWrite, useProvider, useSigner } from 'wagmi';
import sigcapABI from '../abis/SignalCapital.json';
import { sigcapAddress } from '../../ref/addresses';

const enum callSignature {
  addAccount = 'addAccount',
  addNewSignal = 'addNewSignal',
  signalExisting = 'signalExisting',
  withdrawPoints = 'withdrawPoints',
}

export const useAddAccount = (name: string) => {
  const args = useMemo(() => [name], [name]);

  const writeAddAccount = useContractWrite({
    addressOrName: sigcapAddress,
    contractInterface: sigcapABI,
    functionName: callSignature.addAccount,
    args: args,
    onError(error) {
      console.log('Error', error);
    },
    onSuccess(data) {
      console.log('Success', data);
    },
  });
};

export const useAddNewSignal = (name: string, points: number) => {
  const args = useMemo(() => [name, points], [name, points]);

  const writeAddNewSignal = useContractWrite({
    addressOrName: sigcapAddress,
    contractInterface: sigcapABI,
    functionName: callSignature.addNewSignal,
    args: args,
    onError(error) {
      console.log('Error', error);
    },
    onSuccess(data) {
      console.log('Success', data);
    },
  });
};

export const useSignalExisting = (name: string, points: number) => {
  const args = useMemo(() => [name, points], [name, points]);

  const writeSignalExisting = useContractWrite({
    addressOrName: sigcapAddress,
    contractInterface: sigcapABI,
    functionName: callSignature.signalExisting,
    args: args,
    onError(error) {
      console.log('Error', error);
    },
    onSuccess(data) {
      console.log('Success', data);
    },
  });
};

export const useWithdrawPoints = (name: string, points: number) => {
  const args = useMemo(() => [name, points], [name, points]);

  const writeWithdrawPoints = useContractWrite({
    addressOrName: sigcapAddress,
    contractInterface: sigcapABI,
    functionName: callSignature.withdrawPoints,
    args: args,
    onError(error) {
      console.log('Error', error);
    },
    onSuccess(data) {
      console.log('Success', data);
    },
  });
};
