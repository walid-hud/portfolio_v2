import ascii_gen from "./ascii_gen";

const About = ({ lang = "en" }) => {
  const translations = {
    en: {
      title: "\nABOUT ME \n",
      intro:
        "Hi, I'm Walid, I'm a web developer and creative coder, I believe in crafting websites that not only work, but websites with personality, charm and a clear sense of vision.",
      webDeveloperHeader: "<----Web Developer---->",
      webDeveloperText:
        "Most of my work is on the front-end (although I've shipped some back-end features here and there)",
      webDeveloperTools:
        "I work with React and all the typical tools that go along with it including:",
      webDeveloperConclusion:
        "That being said, I'm very open to learning and utilizing new tools and technologies as I'm confidant in my fundamentals and problem solving skills.",
      creativeCoderHeader: "<----Creative Coder---->",
      creativeCoderText:
        "Coding is a creative process, yet, a lot of people, mainly educators and course sellers (and even some developers) have confined this creative process and gave it the sole purpose of \"solving real user problems\", but what if I'm not interested in solving anyone's problem?, what if I just want to express myself or explore a concept using code? To challenge this narrative, I make sure to actively engage in creative coding and abstract and visuals centered projects",
      conceptsCommand: "concepts",
      conceptsInstruction: "to see what i'm talking about)",
      toolsText: "tools I use in the process :",
      typeIn: "type in",
    },
    fr: {
      title: "\nABOUT ME \n",
      intro:
        "Salut, je suis Walid, je suis développeur web et codeur créatif, je crois en la création de sites web qui ne fonctionnent pas seulement, mais des sites web avec de la personnalité, du charme et une vision claire.",
      webDeveloperHeader: "<----Développeur Web---->",
      webDeveloperText:
        "La plupart de mon travail se concentre sur le front-end (bien que j'aie livré quelques fonctionnalités back-end ici et là)",
      webDeveloperTools:
        "Je travaille avec React et tous les outils typiques qui l'accompagnent, notamment :",
      webDeveloperConclusion:
        "Cela étant dit, je suis très ouvert à l'apprentissage et à l'utilisation de nouveaux outils et technologies car j'ai confiance en mes fondamentaux et mes compétences en résolution de problèmes.",
      creativeCoderHeader: "<----Codeur Créatif---->",
      creativeCoderText:
        "Le codage est un processus créatif, pourtant, beaucoup de gens, principalement des éducateurs et des vendeurs de cours (et même certains développeurs) ont confiné ce processus créatif et lui ont donné le seul but de \"résoudre de vrais problèmes d'utilisateurs\", mais que se passe-t-il si je ne suis pas intéressé à résoudre le problème de quelqu'un ?, que se passe-t-il si je veux juste m'exprimer ou explorer un concept en utilisant le code ? Pour défier ce récit, je m'assure de m'engager activement dans le codage créatif et les projets centrés sur l'abstrait et les visuels",
      conceptsCommand: "concepts",
      conceptsInstruction: "pour voir de quoi je parle)",
      toolsText: "outils que j'utilise dans le processus :",
      typeIn: "tapez",
    },
  };

  const t = translations[lang] || translations.en;
  const ascii = ascii_gen(t.title, "Shaded");

  return (
    <>
      <pre className="text-xl pt-2 -mb-4 glitch-text text-[clamp(0.3vw,2vw,1rem)] py-4">{ascii}</pre>
      <div className="w-full md:w-5/6 lg:w-4/6">
        <p>{t.intro}</p>
        <br />
        <p className="text-chart-2 text-xl">{t.webDeveloperHeader}</p>

        <div>
          {t.webDeveloperText}
          <br />
          {t.webDeveloperTools}
          <ul className=" *:inline  *:not-first:px-4">
            <li>
              <a
                href="https://redux.js.org/introduction/getting-started/"
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                &#9734; Redux
              </a>
            </li>
            <li>
              <a
                href="https://create-react-app.dev/docs/adding-a-router/"
                target="_blank"
                className="text-red-500 hover:underline"
              >
                &#9734; React Router
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-foreground hover:underline"
              >
                &#9734; Next JS
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                &#9734; Node JS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                className="text-sky-500 hover:underline"
              >
                &#9734; TailwindCSS
              </a>
            </li>
            <li>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                className="text-yellow-500 hover:underline"
              >
                &#9734; Vite
              </a>
            </li>
            <li>
              <a
                href="https://motion.dev/docs"
                target="_blank"
                className="text-pink-500 hover:underline"
              >
                &#9734; Framer Motion
              </a>
            </li>
          </ul>
          <p>{t.webDeveloperConclusion}</p>
        </div>
        <br />
        <p className="text-chart-5 text-xl">{t.creativeCoderHeader}</p>
        <p>
          {t.creativeCoderText}({t.typeIn}{" "}
          <kbd className="bg-background rounded-md px-2 text-muted-foreground/50">
            {t.conceptsCommand}
          </kbd>{" "}
          {t.conceptsInstruction} <br />
          {t.toolsText}
          <div>
               <ul className=" inline px-4 *:inline *:not-first:px-4">
            <li>
              <a
                href="https://gsap.com/"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                &#9734; GSAP
              </a>
            </li>
            <li>
              <a
                href="https://threejs.org/"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                &#9734; Three JS
              </a>
            </li>
          </ul>
          </div>
        </p>
        <br />
      </div>
    </>
  );
};
export default About;
