"use client"
import './style.css'
import { useEffect } from 'react';
function Swapzone() {
 
    useEffect(() => {
        // This function ensures the script is only loaded once.
        const loadScript = (src) => {
          const existingScript = document.getElementById('swapzoneScript');
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = src;
            script.id = 'swapzoneScript';
            document.body.appendChild(script);
          }
        };
    
        loadScript('https://swapzone.io/script/exchange-widget.js');
        
      }, []);

  return (
    <>
   {/* <div id="swapzoneExchangeWidget" 
      data-size="full" 
      data-refid="YtmdDBBndT"
      data-from="btc" 
      data-to="eth" 
    ></div> */}
    <div id="swapzoneExchangeWidget" 
       data-compact="true" 
       data-size="full" 
       data-refid="YtmdDBBndT"
       data-from="btc" 
       data-to="eth" 
     ></div>
    </>
  );
}
export default Swapzone;
