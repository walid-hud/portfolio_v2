import figlet from "figlet";
import imageToAscii from "image-to-ascii";

import ANSI_shadow from "figlet/importable-fonts/ANSI Shadow";
import alpha from "figlet/importable-fonts/Alpha";
import Bloody from "figlet/importable-fonts/Bloody";
import Blur from "figlet/importable-fonts/BlurVision ASCII";
import Shaded from "figlet/importable-fonts/Shaded Blocky";
import imageToAscii from "image-to-ascii";

figlet.parseFont("ANSI_Shadow", ANSI_shadow);
figlet.parseFont("Alpha", alpha);
figlet.parseFont("Bloody", Bloody);
figlet.parseFont("Blur", Blur);
figlet.parseFont("Shaded", Shaded);

function ascii_img_gen(url, config = {}, window) {
  let ascii_img;
  imageToAscii(
    url,
    {
      ...config,
      size_options: {
        screen_size: { width: innerWidth, height: innerHeight },
        preserve_aspect_ratio: true,
      },
    },
    (err, converted) => (ascii_img = converted)
  );
  return ascii_img;
}

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

export { ascii_gen as default, ascii_img_gen };
