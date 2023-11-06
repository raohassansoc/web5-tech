"use client";
import "./../chain-gpt.css";
import { Roboto_Mono } from "next/font/google";

import { useEffect, useRef, useState } from "react";
import LinksSection from "../Sections/LinksSection";
import Footer from "../Sections/Footer";
import Header from "../Sections/Components/Header";
import GridBg from "../Sections/Components/GridBg";
import BlogWCategories from "../Sections/Components/BlogWCategories";
import Image from "next/image";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={
        "min-h-screen items-center justify-between " + roboto_mono.className
      }
    >
      <Header />
      <GridBg name={"Blockchain"} />
      <div className="p-5  w-full lg:w-[66%] m-auto">
        <div>
          <Image className="object-cover" src={require("@/../public/BlogImages/blockchain.jpeg")}  alt="main-image" />
        </div>
        <p>
          Blockchain technology is on the verge of reshaping agriculture in
          future, promising to enhance food safety and authenticity by
          effectively tracking the origin and journey of agricultural products.
          Here's how it's set to revolutionize farming:
        </p>
        <h3>💧 𝙁𝙪𝙩𝙪𝙧𝙚-𝙍𝙚𝙖𝙙𝙮 𝙏𝙧𝙖𝙘𝙚𝙖𝙗𝙞𝙡𝙞𝙩𝙮: </h3>
        <p>
          Blockchain will create an advanced system to trace the entire journey
          of agricultural products, right from the farm to your table. This will
          give everyone the ability to easily track where the food comes from.
        </p>
        <h3>💧 𝘼𝙨𝙨𝙪𝙧𝙚𝙙 𝘼𝙪𝙩𝙝𝙚𝙣𝙩𝙞𝙘𝙞𝙩𝙮: </h3>
        <p>
          Consumers will be able to use blockchain to make sure their food is
          genuine. By scanning a special code, they can confirm the product's
          authenticity and origin.
        </p>
        <h3>💧 𝙋𝙧𝙚𝙨𝙚𝙧𝙫𝙞𝙣𝙜 𝙌𝙪𝙖𝙡𝙞𝙩𝙮: </h3>
        <p>
          Blockchain's potential will extend to maintaining the quality and
          safety of food. It will store information about how the food was grown
          and handled, ensuring high standards are met.
        </p>
        <h3>💧 𝙎𝙩𝙧𝙚𝙖𝙢𝙡𝙞𝙣𝙚𝙙 𝘿𝙚𝙡𝙞𝙫𝙚𝙧𝙮: </h3>
        <p>
          In the future, farmers will use blockchain to make sure food reaches
          us faster and without any issues. It will make the process of
          delivering food smarter and more efficient.
        </p>
        <h3>💧 𝙍𝙖𝙥𝙞𝙙 𝙄𝙨𝙨𝙪𝙚 𝙍𝙚𝙨𝙤𝙡𝙪𝙩𝙞𝙤𝙣: </h3>
        <p>
          If a problem arises with the food supply, blockchain will enable quick
          identification and resolution of the problem, prioritizing consumer
          health and safety.
        </p>
        <h3>💧 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙯𝙚𝙙 𝙁𝙤𝙤𝙙 𝙎𝙩𝙤𝙧𝙞𝙚𝙨: </h3>
        <p>
          Blockchain will enable farmers to share detailed stories about the
          food we consume, creating a stronger connection between producers and
          consumers.
        </p>
        <h3>💧 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙚𝙙 𝘼𝙜𝙧𝙚𝙚𝙢𝙚𝙣𝙩𝙨: </h3>
        <p>
          Farmers will rely on blockchain to automate agreements and deals
          seamlessly, reducing complexity and ensuring adherence to predefined
          rules.
        </p>
        <h3>💧 𝙂𝙡𝙤𝙗𝙖𝙡 𝙈𝙖𝙧𝙠𝙚𝙩 𝘼𝙘𝙘𝙚𝙨𝙨: </h3>
        <p>
          Blockchain will simplify international food trade, providing an
          easy-to-use global marketplace for farmers to sell their products to
          customers around the world.
        </p>
        <h3>💧 𝙀𝙣𝙝𝙖𝙣𝙘𝙚𝙙 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙎𝙚𝙘𝙪𝙧𝙞𝙩𝙮: </h3>
        <p>
          As blockchain evolves, it will ensure that our personal information
          remains secure and private, accessible only to authorized individuals.
        </p>
        <h3>💧 𝘼𝙣𝙩𝙞𝙘𝙞𝙥𝙖𝙩𝙚𝙙 𝙏𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣: </h3>
        <p>
          As blockchain technology matures, it will significantly transform
          agriculture. Its ability to track food, verify authenticity, and
          ensure safety will create a future where our food supply chain is
          secure and wholesome.
        </p>
        <p>
          The potential impact of blockchain on agriculture is both exciting and
          promising. As it evolves, blockchain will likely play a pivotal role
          in ensuring that the food we consume is not only safe and genuine but
          also deeply connected to the farmers who produce it. By embracing
          blockchain's capabilities, we are poised to witness a profound shift
          in how we produce, distribute, and enjoy agricultural products,
          fostering a safer, more trustworthy, and interconnected food supply
          chain for the future.
        </p>
        <p>#blockchain #agriculture #crypto #blockchainadoption #bitcoin</p>
      </div>
      <div className="p-[64px]"></div>
      <LinksSection />
      <Footer />
    </main>
  );
}
