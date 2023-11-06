import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import Web5 from "@/../public/portfolio-logo.png";
import { useRouterm, usePathname } from "next/navigation";
import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../../translations/en.json"
import es from "../../../translations/es.json"
import fr from "../../../translations/fr.json"
import vi from "../../../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}


import LanguageSelector from "./LanguageSelector";

const Header = ({ content, locales }) => {
  const { locale } = useLanguage();
  const t = translations[locale];


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallerThanSm, setIsSmallerThanSm] = useState(
    typeof window !== "undefined" && window?.innerWidth < 800
  );
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function isScreenSmallerThanSm() {
    return typeof window !== "undefined" && window.innerWidth < 800; // Assuming the sm breakpoint is 640px
  }
  useEffect(() => {
    function handleResize() {
      setIsSmallerThanSm(isScreenSmallerThanSm());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(pathname);
  const navItems = [
    { path: "/", label: t.navHome },
    { path: "/services", label: t.navServices },
    { path: "/swap", label: t.navswap },
    { path: "/contact", label: t.navcontact },
    { path: "/blog-posts", label: t.navBlogs },
  ];
  return (
    <header
      className={
        `flex justify-between items-center overflow-hidden w-full relative z-20 ` +
        (isMenuOpen && isSmallerThanSm ? "flex-col items-center fixed bg-[#0a090f]" : "")
      }
      style={{ background: `linear-gradient(to bottom, #4FC3F7, #1565C0)` }}
    >
      <div className="text-xl font-bold text-left p-10">
        <Image
          src={Web5}
          alt="logo"
          className="h-[60px] min-w-[150px] w-auto object-contain text-left"
        />
      </div>

      {isSmallerThanSm ? (
        <div className="w-full relative z-20">
          <nav
            className={`w-full  justify-center md:flex text-center fixed m-auto ${isMenuOpen ? "flex" : "hidden"
              } sm:flex`}
            style={{
              background: "#0a090f",
            }}
          >
            <ul className="md:flex  p-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer m-0 p-3 text-center ${pathname === item.path ? `text-[#E2255E]` : ``
                    }`}
                >
                  <Link href={'/'} className="border-0 no-underline">
                    {item.label}
                  </Link>{" "}
                </li>
              ))}
              <li
                className="cursor-pointer m-0 p-5 text-[#E2255E]"
                onClick={toggleMenu}
              >
                Close
              </li>
            </ul>
          </nav>
          {!isMenuOpen && (
            <div className="text-right">
              <button
                onClick={toggleMenu}
                className="focus:outline-none m-auto text-center px-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <nav className="flex flex-wrap">
            <ul className="flex ">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer m-0 sm:p-2 lg:p-5 md:p-2 ${pathname === item.path
                      ? "border-b-2 border-[#E2255E] text-[#E2255E]"
                      : ""
                    }`}
                >
                  <Link href={"/"} className="border-0 no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <LanguageSelector currentLocale={locales} /> */}
          <div className="cursor-pointer m-0 sm:p-2 lg:p-5 md:p-2">
            {/* <input
              type="submit"
              value={t?.getstart}
              data-wait="Please wait..."
              className="submit-button-3 w-button py-0"
            ></input> */}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;


export async function getStaticProps({ locale }) {
  let translatedContent = content;

  if (locale !== 'en') {
    translatedContent = await translate(content, locale);
  }

  return {
    props: { translatedContent, locale }
  };
}