import type { Chain } from "../src/types";
export default {
  "chain": "CRC",
  "chainId": 2606,
  "explorers": [
    {
      "name": "Lite Explorer",
      "url": "https://ethereum-pocr.github.io/explorer/pocrnet",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://github.com/ethereum-pocr/pocrnet",
  "name": "PoCRNet",
  "nativeCurrency": {
    "name": "Climate awaReness Coin",
    "symbol": "CRC",
    "decimals": 18
  },
  "networkId": 2606,
  "rpc": [
    "https://2606.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://pocrnet.westeurope.cloudapp.azure.com/http",
    "wss://pocrnet.westeurope.cloudapp.azure.com/ws"
  ],
  "shortName": "pocrnet",
  "slug": "pocrnet",
  "status": "active",
  "testnet": false,
  "title": "Proof of Climate awaReness mainnet"
} as const satisfies Chain;