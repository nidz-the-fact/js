import type { AbiParameterToPrimitiveType } from "abitype";
import type {
  BaseTransactionOptions,
  WithOverrides,
} from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import { encodeAbiParameters } from "../../../../../utils/abi/encodeAbiParameters.js";
import { once } from "../../../../../utils/promise/once.js";
import type { ThirdwebContract } from "../../../../../contract/contract.js";
import { detectMethod } from "../../../../../utils/bytecode/detectExtension.js";

/**
 * Represents the parameters for the "initialize" function.
 */
export type InitializeParams = WithOverrides<{
  defaultAdmin: AbiParameterToPrimitiveType<{
    type: "address";
    name: "_defaultAdmin";
  }>;
  name: AbiParameterToPrimitiveType<{ type: "string"; name: "_name" }>;
  symbol: AbiParameterToPrimitiveType<{ type: "string"; name: "_symbol" }>;
  contractURI: AbiParameterToPrimitiveType<{
    type: "string";
    name: "_contractURI";
  }>;
  trustedForwarders: AbiParameterToPrimitiveType<{
    type: "address[]";
    name: "_trustedForwarders";
  }>;
  saleRecipient: AbiParameterToPrimitiveType<{
    type: "address";
    name: "_saleRecipient";
  }>;
  royaltyRecipient: AbiParameterToPrimitiveType<{
    type: "address";
    name: "_royaltyRecipient";
  }>;
  royaltyBps: AbiParameterToPrimitiveType<{
    type: "uint128";
    name: "_royaltyBps";
  }>;
}>;

export const FN_SELECTOR = "0x49c5c5b6" as const;
const FN_INPUTS = [
  {
    type: "address",
    name: "_defaultAdmin",
  },
  {
    type: "string",
    name: "_name",
  },
  {
    type: "string",
    name: "_symbol",
  },
  {
    type: "string",
    name: "_contractURI",
  },
  {
    type: "address[]",
    name: "_trustedForwarders",
  },
  {
    type: "address",
    name: "_saleRecipient",
  },
  {
    type: "address",
    name: "_royaltyRecipient",
  },
  {
    type: "uint128",
    name: "_royaltyBps",
  },
] as const;
const FN_OUTPUTS = [] as const;

/**
 * Checks if the `initialize` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `initialize` method is supported.
 * @extension ERC721
 * @example
 * ```ts
 * import { isInitializeSupported } from "thirdweb/extensions/prebuilts";
 *
 * const supported = await isInitializeSupported(contract);
 * ```
 */
export async function isInitializeSupported(contract: ThirdwebContract<any>) {
  return detectMethod({
    contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
  });
}

/**
 * Encodes the parameters for the "initialize" function.
 * @param options - The options for the initialize function.
 * @returns The encoded ABI parameters.
 * @extension PREBUILTS
 * @example
 * ```ts
 * import { encodeInitializeParams } "thirdweb/extensions/prebuilts";
 * const result = encodeInitializeParams({
 *  defaultAdmin: ...,
 *  name: ...,
 *  symbol: ...,
 *  contractURI: ...,
 *  trustedForwarders: ...,
 *  saleRecipient: ...,
 *  royaltyRecipient: ...,
 *  royaltyBps: ...,
 * });
 * ```
 */
export function encodeInitializeParams(options: InitializeParams) {
  return encodeAbiParameters(FN_INPUTS, [
    options.defaultAdmin,
    options.name,
    options.symbol,
    options.contractURI,
    options.trustedForwarders,
    options.saleRecipient,
    options.royaltyRecipient,
    options.royaltyBps,
  ]);
}

/**
 * Encodes the "initialize" function into a Hex string with its parameters.
 * @param options - The options for the initialize function.
 * @returns The encoded hexadecimal string.
 * @extension PREBUILTS
 * @example
 * ```ts
 * import { encodeInitialize } "thirdweb/extensions/prebuilts";
 * const result = encodeInitialize({
 *  defaultAdmin: ...,
 *  name: ...,
 *  symbol: ...,
 *  contractURI: ...,
 *  trustedForwarders: ...,
 *  saleRecipient: ...,
 *  royaltyRecipient: ...,
 *  royaltyBps: ...,
 * });
 * ```
 */
export function encodeInitialize(options: InitializeParams) {
  // we do a "manual" concat here to avoid the overhead of the "concatHex" function
  // we can do this because we know the specific formats of the values
  return (FN_SELECTOR +
    encodeInitializeParams(options).slice(
      2,
    )) as `${typeof FN_SELECTOR}${string}`;
}

/**
 * Calls the "initialize" function on the contract.
 * @param options - The options for the "initialize" function.
 * @returns A prepared transaction object.
 * @extension PREBUILTS
 * @example
 * ```ts
 * import { initialize } from "thirdweb/extensions/prebuilts";
 *
 * const transaction = initialize({
 *  contract,
 *  defaultAdmin: ...,
 *  name: ...,
 *  symbol: ...,
 *  contractURI: ...,
 *  trustedForwarders: ...,
 *  saleRecipient: ...,
 *  royaltyRecipient: ...,
 *  royaltyBps: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function initialize(
  options: BaseTransactionOptions<
    | InitializeParams
    | {
        asyncParams: () => Promise<InitializeParams>;
      }
  >,
) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });

  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [
        resolvedOptions.defaultAdmin,
        resolvedOptions.name,
        resolvedOptions.symbol,
        resolvedOptions.contractURI,
        resolvedOptions.trustedForwarders,
        resolvedOptions.saleRecipient,
        resolvedOptions.royaltyRecipient,
        resolvedOptions.royaltyBps,
      ] as const;
    },
    value: async () => (await asyncOptions()).overrides?.value,
  });
}
