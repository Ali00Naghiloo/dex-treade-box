"use client";
import { Widget } from "@kyberswap/widgets";

const page = () => {
  const MY_TOKEN_LIST = [
    {
      name: "KNC",
      address: "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
      symbol: "KNC",
      decimals: 18,
      chainId: 1,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9444.png",
    },
    {
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      name: "USD Coin",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    },
  ];

  const theme = {
    subtext: "#A9A9A9",
    primary: "#141D34",
    secondary: "#0F0F0F",
    borderRadius: "13px",
    buttonRadius: "30px",
    accent: "#9E59FF",
    text: "#fff",
    interactive: "#292929",
    success: "green",
    stroke: "#505050",
    fontFamily: "gilroy",
    dialog: "#313131",
  };

  return (
    <>
      <Widget
        client="DexBot"
        theme={theme}
        tokenList={MY_TOKEN_LIST}
        enableRoute={true}
        enableDexes="kyberswap-elastic,uniswapv3,uniswap"
      />
    </>
  );
};

export default page;
