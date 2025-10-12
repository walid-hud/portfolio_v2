import About from "./About";
import Realme from "./ascii_realMe";
import ConceptsModal from "./ConceptsModal";
import CopyableText from "./CopyableText";
import Projects from "./Projects"
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
          education: "(self explanatory I guess)",
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
          education: "(je suppose que c'est explicite)",
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
        <span>education</span>
        <span>{t.education}</span>
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
      return <p>{lang === "fr" ? "visiteur" : "guest"}</p>;
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
    output: ({ arg, lang = "en" }) => <ConceptsModal lang={lang} />,
    description: {
      en: "showcases some of my creative projects",
      fr: "présente certains de mes projets créatifs",
    },
  },
  education: {
    output({ arg, lang = "en" }) {
      const text = {
      fr:`
        Je n'ai pas de diplôme officiel en développement web, et je considère cela comme un avantage. Après avoir examiné de nombreux programmes de cours et discuté avec des étudiants et des diplômés de différents programmes, j'ai remarqué deux problèmes récurrents :
        <br />- Un champ d'étude trop large : les étudiants sont souvent amenés à étudier plusieurs domaines informatiques à la fois, ce qui ne leur permet d'acquérir qu'une compréhension basique de chacun d'entre eux.
        <br />- Manque de profondeur : de nombreux programmes traitent tous les langages et frameworks de programmation comme relevant du « développement web », ce qui rend difficile la maîtrise réelle de l'un d'entre eux.
        <br />Apprendre par moi-même m'a permis de me concentrer profondément sur les domaines les plus importants pour mon travail, tout en restant adaptable et au fait des nouvelles technologies et tendances.`,
      en:`
        I don’t have a formal degree in web development, and I see that as an advantage. After reviewing many course outlines and talking to students and graduates from different programs, I noticed two recurring issues:
        <br />- Too broad of a focus: students are often required to study several IT fields at once, which leaves them with only a basic understanding of each.
        <br />- Lack of depth — many programs treat all programming languages and frameworks as “web development,” making it difficult to truly master any of them.
        <br />Learning on my own has allowed me to focus deeply on the areas that matter most to my work, while still staying adaptable and aware of new technologies and trends.`
}
      return (
        <p className="w-full md:w-3/5 lg:w-3/4 " dangerouslySetInnerHTML={{__html:text[lang]}}></p>
      );
    },
    description: {
      en: "showcases my educational background",
      fr: "présente mon parcours éducatif",
    },
  },
  projects: {
    output({ arg, lang = "en" }) { return <Projects  lang={lang}/>},
    description: {
      en: "showcases my functional projects",
      fr: "présente mes projets fonctionnels",
    },
  },
  links: {
    output({ arg, lang = "en" }) {
      return (
        <div className="py-2 text-foreground">
          <CopyableText link="mailto:walid.oumoulilte@proton.me" text="walid.oumoulilte@proton.me" lang={lang} />
          <CopyableText link="mailto:walid.oumoulilte@gmail.com" text="walid.oumoulilte@gmail.com" lang={lang} />
          <CopyableText link="https://github.com/walid-hud" text="github.com/walid-hud" lang={lang} />
          <CopyableText link="https://www.linkedin.com/in/walid101" text="linkedin.com/in/walid101" lang={lang} />
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
          {!arg && t.noFile}
          {arg && !fileToRead && `${t.unknownFile} ${arg}`}
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
