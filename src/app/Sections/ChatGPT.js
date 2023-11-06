import Image from "next/image";
import RecentWorkCard from "./Components/RecentWorkCard";
import { Arrow_Right } from "../SVGS/Arrows";
import { useState } from 'react';

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


function ChatGPT() {
  const { locale } = useLanguage();
  const t = translations[locale];

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    const response = await fetch('/api/chatGPT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputText }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message)
      setOutputText(data.outputText || data.message);
    }
  };

  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border styled-border1 m-auto lg:m-0 md:m-0 sm:m-0">
        {t?.TitleChatgpt}
      </h3>
      <div
        className="w-full"
        style={{
          background: "rgba(0,0,0,.1)",
          backdropFilter: "blur(24px)",
        }}
      > <div
          className="flex hide-scrollbar1 gap-y-5 w-full overflow-x-auto"
          style={{
            background: "rgba(0,0,0,.1)",
            backdropFilter: "blur(24px)",
          }}
        >

        <div className=" flex justify-between w-[90%] m-auto flex-wrap">
        <div className="w-[70%]  m-auto">
          <input
            className="w-full border-b-2 border-[white] p-2 focus-visible:border-none"
            style={{ background: "none" }}
            value={inputText}
            type="text"
            onChange={handleInputChange}
          />
        </div>
       
          </div>
       
          <div>
            <p style={{color:'white'}}>{outputText}</p>
          </div>
       
            <input
            {...(inputText == '' ? { disabled: true } : {})}
            onSubmit={handleSendMessage}
            onClick={handleSendMessage}
            type="submit"
            value="Send"
            data-wait="Please wait..."
            className="submit-button-3 w-button m-auto"
          ></input>
        </div>
      </div>
    </div>
  );
}
export default ChatGPT;
