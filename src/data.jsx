import LazyVideo from "./LazyVideo";
import About from "./About";
import Realme from "./ascii_realMe";
import { useState } from "react";
import ClosableModal from "./ClosableModal";
import ConceptsModal from "./ConceptsModal";
export const availableCommands = {
  about: {
    output({ arg, lang = "en" }) {
      return <About lang={lang} />;
    },
    description: {
      en: "short introduction about me",
      fr: "courte présentation à mon sujet",
    },
  },
  help: {
    output({ arg, lang = "en" }) {
      const translations = {
        en: {
          title: "--- list of commands ---",
          about: "(short description about me)",
          concepts: `(showcases some of my creative projects)`,
          projects: `(showcases my functional projects)`,
          links: `(prints my contact info)`,
          clear: "(clears the screen | you can also use ctrl + L)",
          help: "(prints this list)",
          whoami: "(display current user)",
          cat: "(print file content | usage : cat <file name>)",
          ls: "(lists current directory files and directories)",
        },
        fr: {
          title: "--- liste des commandes ---",
          about: "(courte description à mon sujet)",
          concepts: "(présente certains de mes projets créatifs)",
          projects: "(présente mes projets fonctionnels)",
          links: "(affiche mes informations de contact)",
          clear: "(efface l'écran | vous pouvez aussi utiliser ctrl + L)",
          help: "(affiche cette liste)",
          whoami: "(affiche l'utilisateur actuel)",
          cat: "(affiche le contenu du fichier | usage : cat <nom du fichier>)",
          ls: "(liste les fichiers et dossiers du répertoire actuel)",
        },
      };

      const t = translations[lang] || translations.en;

      return (
        <div className="w-full md:w-5/6 lg:w-4/6">
          <p>
        <br />
        {t.title}
        <br />
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 *:not-even:text-foreground *:not-even:font-semibold  *:even:text-foreground/80">
        <span>about</span>
        <span>{t.about}</span>
        <span>concepts</span>
        <span>{t.concepts}</span>
        <span>projects</span>
        <span>{t.projects}</span>
        <span>links</span>
        <span>{t.links}</span>
        <span>clear</span>
        <span>{t.clear}</span>
        <span>help</span>
        <span>{t.help}</span>
        <span>whoami</span>
        <span>{t.whoami}</span>
        <span>cat</span>
        <span>{t.cat}</span>
        <span>ls</span>
        <span>{t.ls}</span>
          </div>
        </div>
      );
    },
    description: {
      en: "prints this list",
      fr: "affiche cette liste",
    },
  },
  ls: {
    output({ arg, lang = "en" }) {
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
      fr: "liste les fichiers du répertoire actuel",
    },
  },
  whoami: {
    output({ arg, lang = "en" }) {
      return <p>guest</p>;
    },
    description: {
      en: "display current user",
      fr: "affiche l'utilisateur actuel",
    },
  },
  clear: {
    output({ arg, lang = "en" }) {
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
      fr: "efface l'écran",
    },
  },
  concepts: {
    output: ({ arg, lang = "en" }) => <ConceptsModal />,
    description: {
      en: "showcases some of my creative projects",
      fr: "présente certains de mes projets créatifs",
    },
  },
  projects: {
    output({ arg, lang = "en" }) {
      const translations = {
        en: {
          title: "--- functional projects ---",
          placeholder: "Project showcase coming soon...",
        },
        fr: {
          title: "--- projets fonctionnels ---",
          placeholder: "Présentation des projets bientôt disponible...",
        },
      };

      const t = translations[lang] || translations.en;

      return (
        <div className="py-2">
          <p className="font-bold mb-2">{t.title}</p>
          <p className="">{t.placeholder}</p>
        </div>
      );
    },
    description: {
      en: "showcases my functional projects",
      fr: "présente mes projets fonctionnels",
    },
  },
  links: {
    output({ arg, lang = "en" }) {
      const translations = {
        en: {
          title: "--- contact information ---",
          email: "Email",
          github: "GitHub",
          linkedin: "LinkedIn",
          website: "Website",
        },
        fr: {
          title: "--- informations de contact ---",
          email: "Email",
          github: "GitHub",
          linkedin: "LinkedIn",
          website: "Site web",
        },
      };

      const t = translations[lang] || translations.en;

      return (
        <div className="py-2">
          <p className="font-bold mb-2">{t.title}</p>
          <p>
            <span className="">{t.email}:</span>{" "}
            your.email@example.com
          </p>
          <p>
            <span className="">{t.github}:</span>{" "}
            github.com/yourusername
          </p>
          <p>
            <span className="">{t.linkedin}:</span>{" "}
            linkedin.com/in/yourprofile
          </p>
          <p>
            <span className="">{t.website}:</span> yourwebsite.com
          </p>
        </div>
      );
    },
    description: {
      en: "prints my contact info",
      fr: "affiche mes informations de contact",
    },
  },
  cat: {
    output({ arg, lang = "en" }) {
      const fileName = arg;
      const translations = {
        en: {
          noFile: "cat : no file specified",
          unknownFile: "unknown file :",
        },
        fr: {
          noFile: "cat : aucun fichier spécifié",
          unknownFile: "fichier inconnu :",
        },
      };

      const t = translations[lang] || translations.en;
      const fileToRead = files.find((file) => file.name === fileName);

      return (
        <div>
          {fileName.length === 0 && t.noFile}
          {fileName.length > 0 && !fileToRead && `${t.unknownFile} ${fileName}`}
          {fileToRead && fileToRead.output({ arg, lang })}
        </div>
      );
    },
    description: {
      en: "prints file content",
      fr: "affiche le contenu du fichier",
    },
  },
};

const files = [
  {
    name: "wished_for.txt",
    output: ({ arg, lang = "en" }) => <Realme />,
  },
];
