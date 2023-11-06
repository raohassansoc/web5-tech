"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import TokenCard from "./TokenCard";

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import $ from "jquery"
import ReactDOM from "react-dom";

function SwapIframe() {

  // function getElementByXpath(path) {
  //   if (iframeDocument) {
  //       return iframeDocument.evaluate(path, iframeDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  //   }
  //   return null;
  // }

 async function getElementByXpath(path) {
    return await document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  
  useEffect(() => {
 
    

    // const iframe = document.querySelector('iframe');

    // const header = document.querySelector('#root > div.App__HeaderWrapper-sc-29e58986-2.gHKFWw > nav');
    // const elementInsideIframe = getElementByXpath('//*[@id="root"]/div[1]/nav');
    // console.log(targetElement)
    
    
    // if (iframe) {
    //   let $head = $("#myIframe").contents().find("head");
    //   $head.append($("<link/>", {
    //     rel: "stylesheet",
    //     href: swapcss,
    //     type: "text/css"
    // }));

    // if (elementInsideIframe) {
    //   elementInsideIframe.style.display = 'none';
    //   elementInsideIframe.style.backgroundColor = 'red'; 
    // } else {
    //     console.warn('Element not found with provided XPath inside iframe.');
    // }
    // } else {
    //   console.warn('Iframe not found.');
    // }
  }, []);

// const iframe = document.querySelector('#myIframe');
// const iframe = getElementByXpath('//*[@id="myIframe"]');

async function getIframe() {
  const iframe = document.getElementById('myIframe');
  // const iframeMain = iframe.contentDocument || iframe.contentWindow.document;
  const iframeMain = iframe.ownerDocument;
  // const iframeBody = iframeMain.body;

  // const a = iframeMain
  // const styleEl = iframeDocument.createElement('link');
  //   styleEl.rel = 'stylesheet';
  //   styleEl.href = swapcss;
  //   iframeDocument.head.appendChild(styleEl);

  // console.log(a)
  // console.log(iframeMain)
  // console.log(iframeBody);

//   const iframeDiv = iframeBody.document.getElementById('root');
// console.log(iframeDiv)

  // iframeBody.insertAdjacentHTML('beforeend', `
  //   <style>
  //   #root {
  //       display: none !important;
  //   }
  //   </style>
  // `);

  // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //   const styleEl = iframeDocument.createElement('link');
  //   styleEl.rel = 'stylesheet';
  //   styleEl.href = swapcss;
  //   iframeDocument.head.appendChild(styleEl);
};

useEffect(() => {

  // if(iframe){
  
  // }

  setInterval(getIframe, 10000);

  // const sendMessage = () => {
  //   const iframe = document.getElementById("myIframe");
  //   iframe.contentWindow.postMessage(
  //     {
  //       type: "SET_STYLES",
  //       styles: {
  //         backgroundColor: "red",
  //         color: "white"
  //       }
  //     },
  //     "https://app.uniswap.org"
  //   );
  // };
  // sendMessage()
  
})


  return (
    <>
      <iframe
        id="myIframe"
        src={"https://app.uniswap.org/#/swap"}
        height="700px"
        width="100%"
        style={{
          border: 'none',
          margin: '0 auto',
          marginTop: '.8rem',
          marginBottom: '.5rem',
          display: 'block',
          borderRadius: 10,
          maxWidth: 960,
          minWidth: 300
        }}
      ></iframe>
    </>
  );
}
export default SwapIframe;
