import type { Chain } from "../src/types";
export default {
  "chain": "GTN",
  "chainId": 101010,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://stability.blockscout.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://stabilityprotocol.com",
  "name": "Global Trust Network",
  "nativeCurrency": {
    "name": "FREE",
    "symbol": "FREE",
    "decimals": 18
  },
  "networkId": 101010,
  "redFlags": [
    "reusedChainId"
  ],
  "rpc": [
    "https://101010.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://gtn.stabilityprotocol.com"
  ],
  "shortName": "stabilityprotocol",
  "slug": "global-trust-network",
  "testnet": false
} as const satisfies Chain;