"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import TokenCard from "./TokenCard";
import { constructSimpleSDK , SwapSide } from '@paraswap/sdk';
import Swal from 'sweetalert2'
import './style.css'
import { ethers, Wallet } from 'ethers';
import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../../translations/en.json"
import es from "../../../translations/es.json"
import fr from "../../../translations/fr.json"
import vi from "../../../translations/vi.json"
import tokenList from './tokenObject/tokens.json'
const { Short_Arrow } = require("@/app/SVGS/Arrows");
const translations = {
  en,
  es,
  fr,
  vi
}



const tokens = [
  { name: 'Cake', imgSrc : 'https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1629359065', address: '0xToken1A0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898ddress' },
  { name: 'USDT', imgSrc: 'https://www.worldcryptoindex.com/wp-content/uploads/2018/01/usdt-logo-300.png', address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7 ' },
  // ... add more tokens up to Token10
];

import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useConnect, useDisconnect , usePublicClient , useWalletClient } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useNetwork } from 'wagmi'

//1inch Swap
import Web3  from 'web3'
import { fetch  } from 'node-fetch'
// import { yesno } from 'yesno'


function SwapCard() {
  const { locale } = useLanguage();
  const t = translations[locale];

  const { connector ,address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { chain, chains } = useNetwork()

  const [chainId , setChainId] = useState();
  const [web3RpcUrl ,setWeb3RpcUrl] =useState();
  const [walletAddress ,setWalletAddress] = useState();
  const [privateKey ,setPrivateKey] = useState();


  const [rightToken , setRightToken] = useState({ symbol: 'BNB', img : 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Binance-Coin-BNB-icon.png', address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' });
  const [leftToken , setLeftToken] = useState( { symbol: 'USDT', img : 'https://cdn.paraswap.io/token/USDT.png', address: '0x55d398326f99059ff775485246999027b3197955' });


  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenOut, setModalOpenOut] = useState(false);

  ///Right
  const [tokenOutValue, setTokenOutValue] = useState();
  const [rightValue , setRightValue] = useState(0);
  async function rightInputChange(e) {
    setRightValue(e.target.value);
    setIsLoadingValue(false)
    if(e.target.value === ''){
      setIsLoadingValue(true)
      setleftValue(0)
    }
    //(e.target.value.length)
    //await getTheSwapValue(e.target.value)
  }
  const getRightTokenPrice = async (r) => {
  //console.log(r)
  await getTokenPriceByAddress(r).then(price => {
      if (price) {
        //console.log('USDT price in USD:', price);
      } else {
       // console.log('Failed to fetch USDT price.');
      }
    });
    setTokenOutValue(price);
  }

  ///Left
  const [rightokenInValue, setRightTokenInValue] = useState('');
  const [leftValue , setleftValue] = useState(0);
  function leftInputChange(e) {
    setleftValue(e.target.value);
  }
  const getLeftTokenPrice = async (l) => {
    await getTokenPriceByAddress(l).then(price => {
      if (price) {
        //console.log('USDT price in USD:', price);
      } else {
        //console.log('Failed to fetch USDT price.');
      }
    });
    //setleftValue(price);
  }



  const switchToken = async () => {
    setRightValue(0)
    setleftValue(0)
    await setRightToken(leftToken)
    await setLeftToken(rightToken)
  }

  async function getTokenPriceByAddress(contractAddress) {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${contractAddress}&vs_currencies=usd`);
      
      if (response.data && response.data[contractAddress] && response.data[contractAddress].usd) {
        return response.data[contractAddress].usd;
      } else {
        console.error('Unable to fetch the price for address:', contractAddress);
        return null;
      }
    } catch (error) {
      console.error('Error fetching token value:', error);
      return null;
    }
  }

  const broadcastApiUrl = "https://api.1inch.dev/tx-gateway/v1.1/" + chainId + "/broadcast";
  const apiBaseUrl = "https://api.1inch.dev/swap/v5.2/" + chainId;
  const web3 = new Web3(web3RpcUrl);
  // const headers = { headers: { Authorization: "Bearer YOUR_API_KEY", accept: "application/json" } };


  const swapParams = {
    src: leftToken?.address, 
    dst: rightToken?.address, 
    amount: web3.utils.toWei(leftValue, 'ether'), 
    from: address,
    slippage: 1, 
    disableEstimate: false, 
    allowPartialFill: false,
  };

  
  async function varifySpender(address) {
    try {
      const response = await axios.get(`/api/swap`, {
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching spender details:', error);
      return null;
    }
  }
  

  const { data: walletClient, isError, isLoading } = useWalletClient()
const swap = async () => {
  // console.log(tokenList)
  //console.log(rightValue)
  if(isConnected){
  if(rightValue !== null && rightValue  !== '' && rightValue > 0){
  const paraSwapMin = constructSimpleSDK({chainId: 56, axios});
  const ETH = rightToken.address;
  const DAI = leftToken.address;
  if(ETH === DAI){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Same Tokens Are Not Able To Swap!'
    })
  }
  else{
    try{
  const amountInWei = await ethers.utils.parseEther(rightValue.toString());
  const priceRoute = await paraSwapMin.swap.getRate({
    srcToken: ETH,
    destToken: DAI,
    amount: amountInWei,
    userAddress: address,
    side: SwapSide.SELL,
  });
  const provider = await connector.getProvider();
  const txParams = await paraSwapMin.swap.buildTx(
    {
      srcToken : ETH,
      destToken : DAI,
      srcAmount : priceRoute.srcAmount,
      destAmount : priceRoute.destAmount,
      priceRoute : priceRoute,
      userAddress: address,
      partner: priceRoute.partner,
    }     
  );
  const transaction = {
    ...txParams,
    gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
    gasLimit: '0x' + new BigNumber(5000000).toString(16),
    value: '0x' + new BigNumber(txParams.value).toString(16),
  };
  const txr = await walletClient.sendTransaction(transaction);
  Swal.fire(
    'Swap Successful',
    'success'
  )
}
catch(err){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: err.message
  })
}
}
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Value Must Be Greater Then Zero'
  })
}
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wallet Not Connected!'
  })
}
  //const signer = provider.getSigner();
  //console.log("Signer "+signer)
  // const txParams = await paraSwapMin.swap.buildTx(
  //   {
  //     srcToken : ETH,
  //     destToken : DAI,
  //     srcAmount : '1000000000000',
  //     destAmount,
  //     priceRoute : priceRoute,
  //     userAddress: address,
  //     partner: referrer,
  //   }     
  // );
  // const response = await axios.post('/api/paraswap',{
  //   name : "Rohan"
  // })

  // varifySpender(address).then(details => {
  //   if (details) {
  //     console.log('Spender Details:', details.status);
  //   } else {
  //     console.log('Failed to fetch spender details.');
  //   }
  // });
}
const [isLoadingValue, setIsLoadingValue] = useState(true);
const [debouncedValue, setDebouncedValue] = useState('');
useEffect(() => {
  const timerId = setTimeout(() => {
    setDebouncedValue(rightValue);
  }, 2000); // 2 sec delay

  return () => {
    clearTimeout(timerId); // Clear the timer if the user is still typing
  };
}, [rightValue]);

useEffect(() => {
  if (debouncedValue) {
    getTheSwapValue(debouncedValue); // Call the function when the debounced value updates
  }
}, [debouncedValue]);
// const [getTheTOkenValue , setGetTheTokenValue] = useState(0);

const getTheSwapValue = async (value)=>{
  console.log("call")
  try{
    setIsLoadingValue(false)
  const paraSwapMin = constructSimpleSDK({chainId: 56, axios});
  const ETH = rightToken.address;
  const DAI = leftToken.address;
  const amountInWei = await ethers.utils.parseEther(value.toString());
  const priceRoute = await paraSwapMin.swap.getRate({
    srcToken: ETH,
    destToken: DAI,
    amount: amountInWei,
    userAddress: address,
    side: SwapSide.SELL,
  });
  const amountInEther = await ethers.utils.formatEther(priceRoute.destAmount);
  setleftValue(amountInEther)
}
catch(err){
  setleftValue(0)
  setIsLoadingValue(true)
}
finally{
  if(value === ''){
    setleftValue(0)
  }
  setIsLoadingValue(true)
}

}


useEffect(()=>{
  setChainId(chain?.id)
  setWalletAddress(address)
  setWeb3RpcUrl(chain?.rpcUrls?.infura?.http[0])

  //console.log(chainId , web3RpcUrl , walletAddress)
},[chain])

useEffect(()=>{
 if(leftValue === '' || leftValue === null){
  setRightValue(0)
 }  
},[leftValue])

useEffect(()=>{
 if(rightValue === '' || rightValue === null){
  setleftValue(0)
 }
},[rightValue])

  return (
    <>
      {isModalOpen && (
       <div id="myModal" class="modal" aria-hidden="true" role="dialog" aria-labelledby="modalTitle">
          <div class="modal-content">
              <div class="modal-header flex">
                  <h3 id="modalTitle flex-col">Select Token</h3>
                  <button onClick={() => setModalOpen(false)} class="close-btn flex-col">X</button>
              </div>
              <div class="modal-body">
                <ul>
                {tokenList.map(token => (
                  <li  key={token.symbol}>
                   <div onClick={()=>{setRightToken(token),setModalOpen(false),getLeftTokenPrice(token.address),setleftValue(0),setRightValue(0)}} className='flex'>
                    <img width={50} className='flex-col' src={token.img} alt={token.symbol} />
                    <h4 className='flex-col token-name'>{token.symbol}</h4>
                   </div>
                  </li>
                ))}
                </ul>
              </div>
          </div>
      </div>
      )}

      {isModalOpenOut && (
       <div id="myModal" class="modal" aria-hidden="true" role="dialog" aria-labelledby="modalTitle">
          <div class="modal-content">
              <div class="modal-header flex">
                  <h3 id="modalTitle flex-col">Select Token</h3>
                  <button onClick={() => setModalOpenOut(false)} class="close-btn flex-col">X</button>
              </div>
              <div class="modal-body">
                <ul>
                {tokenList.map(token => (
                  <li  key={token.symbol}>
                   <div onClick={()=>{setLeftToken(token),setModalOpenOut(false), getRightTokenPrice(token.address),setleftValue(0),setRightValue(0)}} className='flex'>
                    <img width={50} className='flex-col' src={token.img} alt={token.symbol} />
                    <h4 className='flex-col token-name'>{token.symbol}</h4>
                   </div>
                  </li>
                ))}
                </ul>
              </div>
          </div>
      </div>
      )}
    <div
      className="flex flex-col justify-center items-center w-full "
      style={{
        marginTop:'10px',
        background: "rgba(0,0,0,.1)",
        backdropFilter: "blur(24px)",
      }}
    >
      <h3 className="text-center">{t?.SwapDecription}</h3>
      <div className="w-full flex flex-wrap justify-center items-center flex-col md:flex-row">
        
        <div>
          <div onClick={() => setModalOpen(true)}  className="flex justify-between items-center min-w-[290px] rightToken">
            <div className="w-fit flex justify-center items-center">
              <div className="p-2">
                <img width={50} src={rightToken?.img} alt='...' />
              </div>
              <div>
                <h5 className="m-0">{rightToken?.symbol}</h5>
                <p className="m-0 uppercase">{rightToken?.address.substring(0, 8)+'...'+rightToken?.address.substring(32, 40)}</p>
              </div>
            </div>
            <div className="m-0">{Short_Arrow}</div>
          </div>
          <div className="p-5 bg-[#1A1724] rounded-lg">
            <input type='number' onChange={rightInputChange} value={rightValue} className="text-[24px] p-5 m-0 input" />
            {/* <p className="px-5 m-0">~$0,000.00</p> */}
          </div>
        </div>


        <div style={{cursor:'pointer'}} onClick={switchToken} className="p-10 rotate-90 md:rotate-0">
          <svg
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="55.5"
              y="0.521484"
              width="55"
              height="55"
              rx="27.5"
              transform="rotate(90 55.5 0.521484)"
              fill="#1A1724"
            />
            <path
              d="M32.4701 37.5515C32.3241 37.4055 32.2501 37.2135 32.2501 37.0215C32.2501 36.8295 32.3231 36.6375 32.4701 36.4915L35.1901 33.7715L23.0001 33.7715C22.5861 33.7715 22.2501 33.4355 22.2501 33.0215C22.2501 32.6075 22.5861 32.2715 23.0001 32.2715L35.1891 32.2715L32.4691 29.5515C32.1761 29.2585 32.1761 28.7835 32.4691 28.4905C32.7621 28.1975 33.2372 28.1975 33.5302 28.4905L37.5302 32.4905C37.5992 32.5595 37.654 32.6424 37.692 32.7344C37.768 32.9174 37.768 33.1244 37.692 33.3074C37.654 33.3994 37.5992 33.4825 37.5302 33.5515L33.5302 37.5515C33.2372 37.8445 32.7631 37.8445 32.4701 37.5515ZM23.5302 26.4915L20.8102 23.7715L33.0001 23.7715C33.4141 23.7715 33.7501 23.4355 33.7501 23.0215C33.7501 22.6075 33.4141 22.2715 33.0001 22.2715L20.8112 22.2715L23.5311 19.5515C23.8241 19.2585 23.8241 18.7835 23.5311 18.4905C23.2381 18.1975 22.7631 18.1975 22.4701 18.4905L18.4701 22.4905C18.4011 22.5595 18.3462 22.6424 18.3082 22.7334C18.2702 22.8244 18.2501 22.9225 18.2501 23.0205C18.2501 23.1185 18.2702 23.2154 18.3082 23.3074C18.3462 23.3994 18.4011 23.4816 18.4701 23.5506L22.4701 27.5506C22.7631 27.8436 23.2381 27.8436 23.5311 27.5506C23.8241 27.2576 23.8232 26.7845 23.5302 26.4915Z"
              fill="white"
            />
            <rect
              x="55.5"
              y="0.521484"
              width="55"
              height="55"
              rx="27.5"
              transform="rotate(90 55.5 0.521484)"
              stroke="#E2255E"
            />
          </svg>
        </div>
        
        <div>
         <div onClick={() => setModalOpenOut(true)}  className="flex justify-between items-center min-w-[290px] rightToken">
            <div className="w-fit flex justify-center items-center">
              <div className="p-2">
                <img width={50} src={leftToken?.img} alt='...' />
              </div>
              <div>
                <h5 className="m-0">{leftToken?.symbol}</h5>
                <p className="m-0 uppercase">{leftToken?.address.substring(0, 8)+'...'+leftToken?.address.substring(32, 40)}</p>
              </div>
            </div>
            <div className="m-0">{Short_Arrow}</div>
          </div>
          <div className="p-5 bg-[#1A1724] rounded-lg">
            <input type='text' disabled onChange={leftInputChange} value={isLoadingValue ? leftValue : "...Loading"} className="text-[24px] p-5 m-0 input" />
            {/* <p className="px-5 m-0">~$0,000.00</p> */}
          </div>
        </div>

      </div>
      {isConnected ? 
      <>
      <div className='flex'>
      <div onClick={() => disconnect()} className="flex-col min-w-[300px] btn-bg">
        <p className="p-5  m-0 text-center">{address.substring(0,8)+'...'+address.substring(34,42)}</p>
      </div>

      <div onClick={() => swap()} className="flex-col min-w-[300px] btn-bg">
        <p className="p-5  m-0 text-center">Swap</p>
      </div>
      </div>
      </>  
      :
      <>
      <div onClick={() => open()} className="min-w-[300px] btn-bg">
        <p className="p-5  m-0 text-center">{t?.SwapConnectWallet}</p>
      </div>
      </>
    }
    </div>
    </>
  );
}
export default SwapCard;
