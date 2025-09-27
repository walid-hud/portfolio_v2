import ascii_gen from "./ascii_gen";

const name = ascii_gen("WALID OUMOULILTE", "ANSI_Shadow");
const title1 = ascii_gen("WEB DEVELPER", "Regular");
const and = ascii_gen("and", "ANSI_Shadow");
const title2 = ascii_gen("CREATIVE CODER", "Bloody");

const Banner = () => {
  return (
    <>
      <pre className="ascii_banner text-[0.3rem] md:text-[0.5rem] lg:text-[1rem] pt-2 ">
        {name}
      </pre>
      <pre className="flex  justify-between  text-[0.158rem] md:text-[0.3rem] lg:text-[0.5rem] gap-x-2 md:gap-x-0 lg:pr-[10rem] ">
        <pre className="title1 ">{title1}</pre>
        <pre className="text-[0.47rem]">{and}</pre>
        <pre className="title2 ">{title2}</pre>
      </pre>
    </>
  );
};

export default Banner;
