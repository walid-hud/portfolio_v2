import figlet from "figlet";
import _1row from "figlet/importable-fonts/Isometric2";
// good fonts 
// ANSI-Shadow ASCII-3D alpha Bloody DOS-Rebel Larry 3D 2
figlet.parseFont("1row", _1row);

// let txt;


// figlet.text(
//   "about",
//   {
//     font: "1row",horizontalLayout:"full"
//   }, 
//   function (err, data) {
    
//     console.dir(data);
//     // txt = data
//   }
// );

const Figlets = () => {
  return (
    <div>
      <pre className="font-mono text-base text-chart-5">
        {/* {txt} */}
      </pre>
    </div>
  )
}

export default Figlets
