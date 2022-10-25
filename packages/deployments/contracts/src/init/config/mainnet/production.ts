import { InitConfig } from "../../helpers";

export const MAINNET_PRODUCTION_INIT_CONFIG: InitConfig = {
  hub: "6648936", // MAINNET
  supportedDomains: [
    "6648936", // MAINNET
    "1869640809", // OPTIMISM
    "1886350457", // POLYGON
  ],
  assets: [
    {
      name: "USDC",
      canonical: {
        domain: "6648936",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      representations: {
        "1869640809": {
          adopted: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        },
        "1886350457": {
          adopted: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        },
      },
    },
    {
      name: "WETH",
      canonical: {
        domain: "6648936",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      representations: {
        "1869640809": {
          adopted: "0x4200000000000000000000000000000000000006",
        },
        "1886350457": {
          adopted: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        },
      },
    },
  ],
  agents: {
    watchers: {
      whitelist: ["0xade09131C6f43fe22C2CbABb759636C43cFc181e"],
    },
    routers: {
      whitelist: ["0xF26c772C0fF3a6036bDdAbDAbA22cf65ECa9F97c"],
    },
    sequencers: {
      whitelist: ["0x4fFA5968857a6C8242E4A6Ded2418155D33e82E7"],
    },
    relayers: {
      whitelist: ["0xaBcC9b596420A9E9172FD5938620E265a0f9Df92"],
    },
  },
};