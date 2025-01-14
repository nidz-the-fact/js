import type { Chain } from "../src/types";
export default {
  "chain": "Imversed",
  "chainId": 5555558,
  "explorers": [
    {
      "name": "Imversed EVM Explorer (Blockscout)",
      "url": "https://txe-test.imversed.network",
      "standard": "EIP3091"
    },
    {
      "name": "Imversed Cosmos Explorer (Big Dipper)",
      "url": "https://tex-t.imversed.com",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://imversed.com",
  "name": "Imversed Testnet",
  "nativeCurrency": {
    "name": "Imversed Token",
    "symbol": "IMV",
    "decimals": 18
  },
  "networkId": 5555558,
  "rpc": [
    "https://5555558.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://jsonrpc-test.imversed.network",
    "https://ws-jsonrpc-test.imversed.network"
  ],
  "shortName": "imversed-testnet",
  "slip44": 1,
  "slug": "imversed-testnet",
  "testnet": true
} as const satisfies Chain;