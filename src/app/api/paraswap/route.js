import { constructSimpleSDK } from '@paraswap/sdk';
import { ethers } from 'ethers';
import { NextResponse } from 'next/server';
import axios from 'axios';
const paraSwapMin = constructSimpleSDK({chainId: 1, axios: axios});
const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';


async function performSwap(srcAmount, mnemonic, referrer) {
    const signer = ethers.Wallet.fromMnemonic(mnemonic);
    const senderAddress = signer.address;

    const priceRoute = await paraSwapMin.swap.getRate({
        srcToken: ETH,
        destToken: DAI,
        amount: srcAmount,
        userAddress: senderAddress,
        side: 'SELL',
    });

    const txParams = await paraSwapMin.swap.buildTx({
        srcToken: ETH,
        destToken: DAI,
        srcAmount,
        destAmount: priceRoute.destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
    });

    const transaction = {
        ...txParams,
        gasPrice: ethers.utils.hexlify(txParams.gasPrice),
        gasLimit: ethers.utils.hexlify(5000000),
        value: ethers.utils.hexlify(txParams.value),
    };

    const txr = await signer.sendTransaction(transaction);
    return txr.hash;
}


export const POST = async (req) => {
   
  const data = await req.json(); // POST
  console.log(data)
  return NextResponse.json({
    name: 'Shaikh'
  },{status:200})
}