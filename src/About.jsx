import ascii_gen from "./ascii_gen";

const ascii = ascii_gen("ABOUT ME");
const About = () => {
  return (
    <>
      <pre>{ascii}</pre>
      <div className="w-full md:w-5/6 lg:w-4/6">
        <p>
          Hi, I'm Walid, I'm a web developer and creative coder, I believe in
          crafting websites that not only work, but websites with personality,
          charm and a clear sense of vision.
        </p>
        <p className="text-chart-2 text-xl">{`<----Web Developer---->`}</p>

        <p>
          Most of my work is on the front-end (although I've shipped some
          back-end features here and there)
          <br /> I work with React and all the typical tools that go along with
          it including:
          <ul className=" *:inline  *:not-first:px-4">
            <li>
              <a
                href="https://redux.js.org/introduction/getting-started/"
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                Redux
              </a>
            </li>
            <li>
              <a
                href="https://create-react-app.dev/docs/adding-a-router/"
                target="_blank"
                className="text-red-500 hover:underline"
              >
                React Router
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-foreground hover:underline"
              >
                Next JS
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Node JS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                className="text-sky-500 hover:underline"
              >
                TailwindCSS
              </a>
            </li>
            <li>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                className="text-yellow-500 hover:underline"
              >
                Vite
              </a>
            </li>
            <li>
              <a
                href="https://motion.dev/docs"
                target="_blank"
                className="text-pink-500 hover:underline"
              >
                Framer Motion
              </a>
            </li>
          </ul>
          <p>
            That being said, I'm very open to learning and utilizing new tools
            and technologies as I'm confidant in my fundamentals and problem
            solving skills.
          </p>
        </p>
        <p className="text-chart-5 text-xl">{`<----Creative Coder---->`}</p>
        <p>
          Coding is a creative process, yet, a lot of people, mainly educators
          and course sellers (and even some developers) have confined this
          creative process and gave it the sole purpose of "solving real user
          problems", but what if I'm not interested in solving anyone's
          problem?, what if I just want to express myself or explore a concept
          using code? To challenge this narrative, I make sure to actively
          engage in creative coding and abstract and visuals centered projects
          (type in{" "}
          <kbd className="bg-background rounded-md px-2 text-muted-foreground/50">
            concepts
          </kbd>{" "}
          to see what i'm talking about) <br />
          tools I use :
          <ul className=" *:inline *:not-first:px-4">
            <li>
              <a
                href="https://gsap.com/"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                GSAP
              </a>
            </li>
            <li>
              <a
                href="https://threejs.org/"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                Three JS
              </a>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
export default About;
