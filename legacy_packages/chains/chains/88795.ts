import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 88795,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "QaUser8230 Testnet",
  "nativeCurrency": {
    "name": "QaUser8230 Testnet Token",
    "symbol": "GRB",
    "decimals": 18
  },
  "networkId": 88795,
  "redFlags": [],
  "rpc": [
    "https://88795.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
  ],
  "shortName": "QaUser8230 Testnet",
  "slug": "qauser8230-testnet",
  "testnet": true
} as const satisfies Chain;