import { NextResponse } from 'next/server';
import axios from 'axios';

async function varifySpender(address) {
    try {
        const response = await axios({
          method: 'get',
          url: 'https://api.1inch.dev/swap/v5.2/1/approve/spender',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer abc1234567890`,
            },
          data: {
            address: address
          }
        });

        return response.data;
      } catch (error) {
        return error.response.data;
      }
}

export const GET = async (req) => {
    //const data = await req.json(); // POST
    let address = req.nextUrl.searchParams.get('address'); // GET

    try {
        const status = await varifySpender(address);
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
