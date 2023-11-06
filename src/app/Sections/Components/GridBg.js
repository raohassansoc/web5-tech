// import img from 'https://bafybeidu7gublkmkx7caxryogkgbaet65wx5yfzf7wh6vc7ic6ona76wxa.ipfs.w3s.link/Capture1-removebg-preview.png'



function GridBg({name}) {
  return (
    <>
    <div className="grid-container h-[50vh] w-full flex items-center justify-center sm:justify-normal p-10 mb-5">
      <h3 className="max-w-full uppercase styled-border h-[12vh]  m-auto lg:m-0 md:m-0 sm:m-0 flex items-center">
        {name}
      </h3>

        <div style={{marginLeft:'auto', marginRight:'auto'}} className="flex ">
          <div className="mob  flex-col w-full flex ">
            <img style={{transform:'scalex(-1)'}} src='https://bafybeigdh35jsxlleqi3qq6cu2v6sze375b2rmjplya33ed2zlfir4lmwu.ipfs.w3s.link/robot-animation-for-gif-unscreen.gif' alt='img' />
          </div>
          <div className="mob  flex-col  w-full flex ">
            <img src='https://bafybeigdh35jsxlleqi3qq6cu2v6sze375b2rmjplya33ed2zlfir4lmwu.ipfs.w3s.link/robot-animation-for-gif-unscreen.gif' alt='img' />
          </div>
        </div>

  
    </div>
    </>
  );
}

export default GridBg;
