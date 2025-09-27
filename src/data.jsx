import LazyVideo from "./LazyVideo";
import About from "./About";
import Realme from "./ascii_realMe";
import ascii_gen from "./ascii_gen";
export const availableCommands = {
  about: {
    output({arg, lang = "en"}) {
      return <About lang={lang} />;
    },
    description: {
      en: "short introduction about me",
      fr: "courte présentation à mon sujet"
    },
  },
  help: {
    output({arg, lang = "en"}) {
      const translations = {
        en: {
          title: "--- list of commands ---",
          about: "(short description about me)",
          help: "(prints this list)",
          clear: "(clears the screen)",
          whoami: "(display current user)",
          cat: "(print file content | usage : cat <file name>)",
          ls: "(lists current directory files and directories)"
        },
        fr: {
          title: "--- liste des commandes ---",
          about: "(courte description à mon sujet)",
          help: "(affiche cette liste)",
          clear: "(efface l'écran)",
          whoami: "(affiche l'utilisateur actuel)",
          cat: "(affiche le contenu du fichier | usage : cat <nom du fichier>)",
          ls: "(liste les fichiers et dossiers du répertoire actuel)"
        }
      };
      
      const t = translations[lang] || translations.en;
      
      return (
        <div className="w-full md:w-5/6 lg:w-4/6">
          <br />
          <p>{t.title}</p>
          <br />
          <p>
            about{" "}
            <span className="text-amber-300 ">
              {t.about}
            </span>
          </p>
          <p>
            help <span className="text-amber-300 ">{t.help}</span>
          </p>
          <p>
            ctrl + L{" "}
            <span className="text-amber-300 ">{t.clear}</span>
          </p>
          <p>
            whoami{" "}
            <span className="text-amber-300 ">{t.whoami}</span>
          </p>
          <p>
            cat{" "}
            <span className="text-amber-300 ">
              {t.cat}
            </span>
          </p>
          <p>
            ls{" "}
            <span className="text-amber-300 ">
              {t.ls}
            </span>
          </p>
        </div>
      );
    },
    description: {
      en: "prints this list",
      fr: "affiche cette liste"
    },
  },
  ls: {
    output({arg, lang = "en"}) {
      return (
        <div className=" *:not-first:px-4">
          {files.map((file) => (
            <p key={crypto.randomUUID()} className="text-foreground/80 inline ">
              {file.name}
            </p>
          ))}
        </div>
      );
    },
    description: {
      en: "lists files in current directory",
      fr: "liste les fichiers du répertoire actuel"
    },
  },
  whoami: {
    output({arg, lang = "en"}) {
      return <p>guest</p>;
    },
    description: {
      en: "display current user",
      fr: "affiche l'utilisateur actuel"
    },
  },
  clear: {
    output({arg, lang = "en"}) {
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "l",
          code: "KeyL",
          ctrlKey: true,
          bubbles: true,
          cancelable: true,
        })
      );
      return <></>;
    },
    description: {
      en: "clears the screen",
      fr: "efface l'écran"
    },
  },
  concepts: {
    output({arg, lang = "en"}) {  
      return (
        <div className="flex flex-col gap-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  ">
            <LazyVideo src={"/3d_product_concept.mp4"} />
            <LazyVideo src={"/img_gallery_2.mp4"} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <LazyVideo src={"/animated_nav.mp4"} />
            <LazyVideo src={"/fluid_sim.mp4"} />
            <LazyVideo src={"/img_gallery_1.mp4"} />
          </div>
        </div>
      );
    },
  },

  cat: {
    output({arg, lang = "en"}) {
      const fileName = arg;
      const translations = {
        en: {
          noFile: "cat : no file specified",
          unknownFile: "unknown file :"
        },
        fr: {
          noFile: "cat : aucun fichier spécifié",
          unknownFile: "fichier inconnu :"
        }
      };
      
      const t = translations[lang] || translations.en;
      const fileToRead = files.find((file) => file.name === fileName);
      
      return (
        <div>
          {fileName.length === 0 && t.noFile}
          {fileName.length > 0 && !fileToRead && `${t.unknownFile} ${fileName}`}
          {fileToRead && fileToRead.output({arg, lang})}
        </div>
      );
    },
    description: {
      en: "prints file content",
      fr: "affiche le contenu du fichier"
    },
  },
};

const files = [
  {
    name: "theR3alMe.txt",
    output: ({arg, lang = "en"}) => <Realme />,
  },
];
