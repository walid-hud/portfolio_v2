import { useEffect, useReducer, useRef, useState } from "react";
import CommandLabel from "./CommandLabel";
import { availableCommands } from "./data";
import Banner from "./Banner";

const Terminal = () => {
  const terminalEndRef = useRef(null);
  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE_INPUT":
        // console.table(state);

        return { ...state, commandInput: action.payload };
      case "HIGHLIGHT_COMMAND":
        return { ...state, commandHighlight: action.payload };

      case "EXECUTE_COMMAND":
        return {
          ...state,
          terminalHistory: [...state.terminalHistory, action.payload],
          commandInput: "",
        };

      case "CLEAR_TERMINAL":
        return { ...state, terminalHistory: action.payload };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    terminalHistory: [],
    commandInput: "",
    commandHighlight: false,
  });

  const handleInputChange = (e) => {
    dispatch({ type: "UPDATE_INPUT", payload: e.target.value });
    let commandMatches = Object.keys(availableCommands).includes(
      e.target.value.split(" ")[0]
    );
    dispatch({ type: "HIGHLIGHT_COMMAND", payload: commandMatches });
  };
  const executeCommand = () => {
    dispatch({
      type: "EXECUTE_COMMAND",
      payload: {
        command: inputRef.current.value,
        commandOutput: findCommand(inputRef.current.value.split(" ")[0]).output(
          inputRef.current.value.split(" ")[1]
        ),
      },
    });
  };
  const findCommand = (command) => {
    let foundCommand = {};
    if (availableCommands.hasOwnProperty(command)) {
      foundCommand = availableCommands[command];
    } else {
      foundCommand = {
        output() {
          return <p>unknown command : {command}</p>;
        },
      };
    }
    return foundCommand;
  };

  const showLastCommand = () => {
    const lastCommand = state.terminalHistory.at(-1) || { command: "" };
    dispatch({ type: "UPDATE_INPUT", payload: lastCommand.command });
    let commandMatches = Object.keys(availableCommands).includes(
      lastCommand.command
    );
    dispatch({ type: "HIGHLIGHT_COMMAND", payload: commandMatches });
  };
  const inputRef = useRef(null);
  useEffect(() => {
    window.onkeydown = (e) => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if (inputRef.current === document.activeElement) {
        switch (e.key) {
          case "Enter":
            if (inputRef.current.value.length > 0) {
              executeCommand();
            }
            break;
          case "l":
            if (e.ctrlKey) {
              e.preventDefault();
              dispatch({ type: "CLEAR_TERMINAL", payload: [] });
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            showLastCommand();
            break;
          case "ArrowDown":
            e.preventDefault();
            dispatch({ type: "UPDATE_INPUT", payload: "" });
            break;
          default:
            break;
        }
      }
    };
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.terminalHistory]);

  return (
    <div className="bg-neutral-950 h-screen text-foreground font-mono text-sm px-2">
      <div id="textarea">
        <Banner />
        <Welcom />
        {state.terminalHistory.map(({ command, commandOutput }) => {
          return (
            <pre key={crypto.randomUUID()} className="whitespace-pre">
              <CommandLabel command={command} />
              {commandOutput}
            </pre>
          );
        })}
      </div>
      <div id="input" className="flex gap-x-2">
        <label htmlFor="command input">
          <CommandLabel />
        </label>
        <input
          spellCheck="false"
          value={state.commandInput}
          onChange={handleInputChange}
          ref={inputRef}
          type="text"
          name="command input"
          className={`outline-0 w-full inline  ${
            state.commandHighlight ? "text-blue-400" : "text-red-400"
          }`}
        />
        <div ref={terminalEndRef}></div>
      </div>
    </div>
  );
};

export default Terminal;

function Welcom() {
  return (
    <>
      <p>
        Type <span className="text-lime-500">help</span> to see available
        commands
      </p>
    </>
  );
}
