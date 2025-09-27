import figlet from "figlet";

import ANSI_shadow from "figlet/importable-fonts/ANSI Shadow";
import alpha from "figlet/importable-fonts/Alpha";
import Bloody from "figlet/importable-fonts/Bloody";
import Blur from "figlet/importable-fonts/BlurVision ASCII";
import Shaded from "figlet/importable-fonts/Shaded Blocky";
import Blocks from "figlet/importable-fonts/Blocks";
import iso from "figlet/importable-fonts/Isometric3"
import Regular from "figlet/importable-fonts/ANSI Regular"

figlet.parseFont("Blocks", Blocks);
figlet.parseFont("Iso", iso);
figlet.parseFont("ANSI_Shadow", ANSI_shadow);
figlet.parseFont("Regular", Regular);
figlet.parseFont("Alpha", alpha);
figlet.parseFont("Bloody", Bloody);
figlet.parseFont("Blur", Blur);
figlet.parseFont("Shaded", Shaded);

function ascii_gen(text, font = "ANSI_Shadow", hl = "full", vl = "full") {
  let ascii;
  figlet.text(
    text,
    { font: font, horizontalLayout: hl, verticalLayout: vl },
    (err, result) => {
      ascii = result;
    }
  );
  return ascii;
}

export { ascii_gen as default };
