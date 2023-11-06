"use client";
import GridBg from "../Sections/Components/GridBg";
import Header from "../Sections/Components/Header";
import SolutionCard from "../Sections/Components/SolutionCard";
import Footer from "../Sections/Footer";
import LinksSection from "../Sections/LinksSection";
import "./../chain-gpt.css";


import { useLanguage } from "@/contexts/LanguageContext"; 
import en from "../../translations/en.json"
import es from "../../translations/es.json"
import fr from "../../translations/fr.json"
import vi from "../../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}


function Services() {

  const { locale } = useLanguage();
  const t = translations[locale];

  const services = t?.solutions

  // [
  //   {
  //     name: "App Development",
  //     description:
  //       "Reliable & Fast Source of Information. Ask ChainGPT Al any question related to Blockchain and Crypto.",
  //     links: [
  //       { name: "Crypto App", link: "/" },
  //       { name: "Exchange App", link: "/" },
  //       { name: "Crypto Wallet App", link: "/" },
  //     ],
  //   },
  //   {
  //     name: "Web Development",
  //     description:
  //       "Reliable & Fast Source of Information. Ask ChainGPT Al any question related to Blockchain and Crypto.",
  //     links: [
  //       { name: "Crypto App", link: "/" },
  //       { name: "Exchange App", link: "/" },
  //     ],
  //   },
  //   {
  //     name: "Blockchain Development",
  //     description:
  //       "Reliable & Fast Source of Information. Ask ChainGPT Al any question related to Blockchain and Crypto.",
  //     links: [
  //       { name: "Crypto App", link: "/" },
  //       { name: "Crypto App", link: "/" },
  //       { name: "Exchange App", link: "/" },
  //       { name: "Crypto Wallet App", link: "/" },
  //     ],
  //   },
  //   {
  //     name: "Digital Marketing",
  //     description:
  //       "Reliable & Fast Source of Information. Ask ChainGPT Al any question related to Blockchain and Crypto.",
  //     links: [
  //       { name: "Crypto App", link: "/" },
  //       { name: "Crypto App", link: "/" },
  //       { name: "Exchange App", link: "/" },
  //       { name: "Crypto Wallet App", link: "/" },
  //     ],
  //   },
  // ];

  return (
    <div>
      <Header />
      <GridBg name={t?.TitleServices} />
      {/* <div className="grid-container h-[50vh] w-full flex items-center justify-center sm:justify-normal p-10"> */}
  
<div style={{
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 0),linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 0)",
          backgroundSize:"10vh 10vh",
          backgroundPosition:'center'
          // backdropFilter: "blur(24px)",
        }} >
      <div
      className=" p-5 w-full lg:w-[66%] m-auto"
        style={{
          // background: "rgba(0,0,0,.1)",
          // backdropFilter: "blur(24px)",
        }}
      >
        {services.map((e, i) => (
          <SolutionCard key={i} index={i} solution={e} />
        ))}
      </div>
      </div>

    {/* </div> */}
      <LinksSection />
      <Footer />
    </div>
  );
}

export default Services;
