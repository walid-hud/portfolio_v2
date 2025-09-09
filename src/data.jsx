export const availableCommands = {
  about: {
    output() { return <p>my name is walid </p> },
    description: "short introduction about me"
  }
  ,
  help: {
    output() {
      return (<div className="">
        <br />
        <p>--- list of commands ---</p>
        <br />
        <p>
          about <span className="text-amber-300 ">(short description about me)</span>
        </p>
        <p>
          help <span className="text-amber-300 ">(prints this list)</span>
        </p>
        <p>
          ctrl + L <span className="text-amber-300 ">(clears the screen)</span>
        </p>
        <p>
          whoami <span className="text-amber-300 ">(display current user)</span>
        </p>
      </div>
      )
    },
    description: "prints this list"
  },
  ls: {
    output() {
      return (<div className=" *:not-first:px-4">
        {files.map((file) => <p key={crypto.randomUUID()} className="text-foreground/80 inline ">{file}</p>)}

      </div>)
    }
    ,
    description: "lists files in current directory"
  },
  whoami: {
    output() {
      return (<p>guest</p>)
    }
    ,
    description: "display current user"
  },
  clear: {
    output() {
      window.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'l',
        code: 'KeyL',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      }))
      return <></>
    },
    description:"clears the screen"
  }

}

const files = ["about.exe", "whoami.exe",]