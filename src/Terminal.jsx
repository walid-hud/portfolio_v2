import { useEffect, useReducer, useRef, useState } from "react";
import CommandLabel from "./CommandLabel";
import { availableCommands } from "./data";
import Banner from "./Banner";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const Terminal = () => {
  const { lang } = useContext(LanguageContext);
  const terminalEndRef = useRef(null);
  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE_INPUT":
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
          { arg: inputRef.current.value.split(" ")[1], lang: lang }
        ),
      },
    });
  };
  const triggerAutoComplete = () => {
    Object.entries(availableCommands).map((entrie) => {
      if (entrie[0].includes(inputRef.current.value)) {
        dispatch({ type: "UPDATE_INPUT", payload: entrie[0] });
        let commandMatches = Object.keys(availableCommands).includes(
          entrie[0].split(" ")[0]
        );
        dispatch({ type: "HIGHLIGHT_COMMAND", payload: commandMatches });
      }
    });
  };
  const findCommand = (command) => {
    let foundCommand = {};
    if (availableCommands.hasOwnProperty(command)) {
      foundCommand = availableCommands[command];
    } else {
      foundCommand = {
        output() {
          return (
            <p>
              {lang === "fr" ? "commande inconnue " : "unknown command "}:{" "}
              {command}
            </p>
          );
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

          case "Tab":
            e.preventDefault();
            triggerAutoComplete();
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
    <div
      id="terminal"
      className=" h-screen text-foreground font-mono text-sm px-2"
    >
      <div id="textarea">
        <Banner lang={lang} />
        <Welcom />
        {state.terminalHistory.map(({ command, commandOutput }, index) => {
          return (
            <div key={index}>
              <CommandLabel command={command} />
              {commandOutput}
            </div>
          );
        })}
      </div>
      <div id="input" className="flex gap-x-2 ">
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
            state.commandHighlight ? "text-foreground" : "text-red-400"
          }`}
        />
        <div ref={terminalEndRef}></div>
      </div>
    </div>
  );
};

export default Terminal;

function Welcom() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      {lang === "en" && (
        <div className=" *:inline *:last:px-2">
          <p>
            Type <span className="text-lime-500 ">help</span> to see available
            commands |
          </p>
          <p className=" text-foreground/50 *:text-foreground/60 *:bg-muted *:outline-1 *:rounded-sm *:px-2 ">
            <span>tab</span> to auto-complete commands 
          </p>
        </div>
      )}
      {lang === "fr" && (
        <div className=" *:inline *:last:px-2">
          <p>
            Tapez <span className="text-lime-500">help</span> pour voir les
            commandes disponibles |
          </p>
            <p className=" text-foreground/50 *:text-foreground/60 *:bg-muted *:outline-1 *:rounded-sm *:px-2"><span>Tab</span> pour compléter automatiquement les commandes</p>
        </div>
      )}
    </>
  );
}
