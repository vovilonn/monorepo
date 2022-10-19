/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAllowList,
  IAllowListInterface,
} from "../../../../../../../@matterlabs/zksync-contracts/l1/contracts/common/interfaces/IAllowList";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "NewOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldPendingOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newPendingOwner",
        type: "address",
      },
    ],
    name: "NewPendingOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UpdateCallPermission",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "UpdatePublicAccess",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
    ],
    name: "hasSpecialAccessToCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "isAccessPublic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_callers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "bytes4[]",
        name: "_functionSigs",
        type: "bytes4[]",
      },
      {
        internalType: "bool[]",
        name: "_enables",
        type: "bool[]",
      },
    ],
    name: "setBatchPermissionToCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_enables",
        type: "bool[]",
      },
    ],
    name: "setBatchPublicAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPendingOwner",
        type: "address",
      },
    ],
    name: "setPendingOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setPermissionToCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setPublicAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAllowList__factory {
  static readonly abi = _abi;
  static createInterface(): IAllowListInterface {
    return new utils.Interface(_abi) as IAllowListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllowList {
    return new Contract(address, _abi, signerOrProvider) as IAllowList;
  }
}