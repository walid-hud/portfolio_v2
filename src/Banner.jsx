import ascii_gen from "./ascii_gen";

const texts = {
  en: {
    name: "WALID OUMOULILTE",
    title1: "WEB DEVELOPER",
    title2: "CREATIVE CODER",
  },
  fr: {
    name: "WALID OUMOULILTE",
    title1: "DEVELOPPEUR WEB ",
    title2: " CODEUR CREATIF",
  },
};

const Banner = ({ lang = "en" }) => {
  const { name, title1, title2 } = texts[lang] || texts.en;
  const asciiName = ascii_gen(name, "ANSI_Shadow");
  const asciiTitle1 = ascii_gen(title1, "Regular");
  const asciiTitle2 = ascii_gen(title2, "Regular");

  return (
    <div className="mb-12 select-none">
      <pre className="ascii_banner pt-2">
        {asciiName}
      </pre>
      <pre className="flex justify-between gap-x-2 md:gap-x-0 pr-0 lg:pr-8">
        <pre className="title1 title_clamp">{asciiTitle1}</pre>
        <pre className="title2 title_clamp">{asciiTitle2}</pre>
      </pre>
    </div>
  );
};

export default Banner;
