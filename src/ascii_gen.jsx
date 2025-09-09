import figlet from "figlet";

import ANSI_shadow from "figlet/importable-fonts/ANSI Shadow";
import alpha from "figlet/importable-fonts/alpha";
import Bloody from "figlet/importable-fonts/Bloody";


figlet.parseFont("ANSI_Shadow", ANSI_shadow);
figlet.parseFont("Alpha", alpha);
figlet.parseFont("Bloody", Bloody);




function ascii_gen(text , font = "Bloody"){
    let ascii;
    figlet.text(text , {font:font , horizontalLayout:"full", verticalLayout:"full"} , (err , result)=>{ascii = result})
    return ascii
}

export default ascii_gen