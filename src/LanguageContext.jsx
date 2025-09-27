import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [currentLang, setLang] = useState("en");

  const changeLang = (newLang) => {
    if (newLang === "en" || newLang === "fr") {
      setLang(newLang);
    } else {
      console.warn(`Unsupported language: ${newLang}`);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ lang: currentLang, setLang: changeLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
