import { useContext } from "react";
import {LanguageContext} from "./LanguageContext"
const CommandLabel = ({ command, dir , }) => {
  const {lang } = useContext(LanguageContext);
  return (
    <>
      <span>
        {lang === "fr" ? "visiteur" : "guest"}
        <span className="text-lime-400">@walid</span>
      </span>
      <span>
        :<span>{dir}</span>
        <span className="text-accent-foreground">~</span>${" "}
        <span>{command}</span>
      </span>
    </>
  );
};

export default CommandLabel;
