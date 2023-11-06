import { NextResponse } from 'next/server';
import axios from 'axios';

async function Swap(data) {
  try {
      const response = await axios({
        method: 'get',
        url: 'https://api.1inch.dev/swap/v5.2/1/approve/spender',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer abc1234567890`,
          },
        data: data
      });
      console.log(response)
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      return error.response.data;
    }
}



export const GET = async (req) => {
    //const data = await req.json(); // POST
    // let address = req.nextUrl.searchParams.get('address'); // GET
    // const PARAMS = {
    //   src: '0x061ED40aF4641A52ee4EE8E1A9a32FB0e948CE70',
    //   dst: '0xd7139C13B19835a93bEc47E8bE779345C7cE03f6',
    //   amount: '10000000000000000',
    //   from: '0x0767b8C4491dDb74711365c0f858b2925377A27c',
    //   slippage: '1',
    //   protocols: 'all',
    //   fee: '0',
    //   disableEstimate: 'true',
    //   includeTokensInfo: 'true',
    //   includeProtocols: 'true',
    //   compatibility: 'true',
    //   allowPartialFill: 'true',
    //   parts: '50',
    //   mainRouteParts: '10',
    //   connectorTokens: ''
    // };
  
    const PARAMS = {
      "fromToken": {
        "symbol": "string",
        "name": "string",
        "address": "string",
        "decimals": 0,
        "logoURI": "string"
      },
      "toToken": {
        "symbol": "string",
        "name": "string",
        "address": "string",
        "decimals": 0,
        "logoURI": "string"
      },
      "toAmount": "string",
      "protocols": [
        "string"
      ],
      "tx": {
        "from": "string",
        "to": "string",
        "data": "string",
        "value": "string",
        "gasPrice": "string",
        "gas": 0
      }
    }

    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `https://api.1inch.dev/swap/v5.2/1/swap?src=${PARAMS.src}&dst=${PARAMS.dst}&amount=${PARAMS.amount}&from=${PARAMS.from}&slippage=${PARAMS.slippage}&protocols=${PARAMS.protocols}&fee=${PARAMS.fee}&disableEstimate=${PARAMS.disableEstimate}&includeTokensInfo=${PARAMS.includeTokensInfo}&includeProtocols=${PARAMS.includeProtocols}&compatibility=${PARAMS.compatibility}&allowPartialFill=${PARAMS.allowPartialFill}&parts=${PARAMS.parts}&mainRouteParts=${PARAMS.mainRouteParts}&connectorTokens=${PARAMS.connectorTokens}`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };


    // try {
    //   axios.request(config)
    //   .then((response) => {
    //     return NextResponse.json({
    //       response
    //       },{ status: 200 });
    //   })
    //   .catch((error) => {
    //     return NextResponse.json({
    //       success: false, 
    //       message: error,
    //     },{ status: 404 });
    //   });
      
    // } catch (error) {
    //   return NextResponse.json({
    //     success: false, 
    //     message: error,
    //   },{ status: 404 });
    // }


    try {
      const status = await Swap(PARAMS);
      console.log(status)
      if(status){
          return NextResponse.json({
              status
          },{ status: 200 });
      }else{
          return NextResponse.json({
              success: false,
              massage: 'Bad Request' 
          },{ status: 400 });
      }
    } catch (error) {
        return NextResponse.json({
            success: false, 
            message: error.message,
        },{ status: 404 });
    }


}
