import React, { useContext, useReducer, createContext } from 'react';

export type AgentReducerProps = {
  agent?: any;
};

const initialState: AgentReducerProps = {
  agent: {},
};

const agent = (state: AgentReducerProps, action: any) => {
  switch (action.type) {
    case 'LOGGED_IN_AGENT':
      return { ...state, agent: action.payload };
    case 'LOG_OUT_AGENT':
      return { agent: {} };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(agent, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
const Context = createContext<AgentReducerProps | any>(initialState);

const useAuthState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
};

export { Context, useAuthState };
export default AuthProvider;
