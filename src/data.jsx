import About from "./About";

export const availableCommands = {
  about: {
    output() {
      return <About />;
    },
    description: "short introduction about me",
  },
  help: {
    output() {
      return (
        <div className="w-full md:w-5/6 lg:w-4/6">
          <br />
          <p>--- list of commands ---</p>
          <br />
          <p>
            about{" "}
            <span className="text-amber-300 ">
              (short description about me)
            </span>
          </p>
          <p>
            help <span className="text-amber-300 ">(prints this list)</span>
          </p>
          <p>
            ctrl + L{" "}
            <span className="text-amber-300 ">(clears the screen)</span>
          </p>
          <p>
            whoami{" "}
            <span className="text-amber-300 ">(display current user)</span>
          </p>
          <p>
            cat{" "}
            <span className="text-amber-300 ">
              ({`print file content | usage : cat <file name>`})
            </span>
          </p>
        </div>
      );
    },
    description: "prints this list",
  },
  ls: {
    output() {
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
    description: "lists files in current directory",
  },
  whoami: {
    output() {
      return <p>guest</p>;
    },
    description: "display current user",
  },
  clear: {
    output() {
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
    description: "clears the screen",
  },

  cat: {
    output(fileName) {
      const fileToRead = files.find((file) => file.name === fileName);
      return (
        <p>
          {fileName.length === 0 && "no file specified"}
          {fileName.length > 0 && !fileToRead && `unknown file : ${fileName}`}
          {fileToRead && fileToRead.output()}
        </p>
      );
    },
    description: "prints file content",
  },
};

const files = [
  {
    name: "theR3alMe.txt",
    output: () => {
      return (
        <div>
          <pre></pre>
          <p>
            the truth be told, there isn't a real me, there isn't a "me" to
            begin with,
          </p>
        </div>
      );
    },
  },
  {
    name: "secret.txt",
    output: () => {
      return (
        <div>
          {/* <img src="" alt="" /> */}
          <p>some secret</p>
        </div>
      );
    },
  },
];
