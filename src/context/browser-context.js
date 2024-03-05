import { createContext, useContext, useReducer } from "react";
import { browserReducer } from "../reducer/browserReducer";

const BrowserContext = createContext();

const initialState = {
  time: "",
  name: "",
  task: "",
  message: "",
  textQuote: "",
  isFlag: false,
  isTaskAdded: false
}

const BrowserProvider = ({ children }) => {
  
  const [{ time, name, task, message, textQuote, isFlag, isTaskAdded },browserDispatch] = useReducer(browserReducer,initialState );

  return (
    <BrowserContext.Provider value={{time,name,task,message,textQuote,isFlag,isTaskAdded,browserDispatch}}>
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowser = () => useContext(BrowserContext);

export { useBrowser, BrowserProvider };
