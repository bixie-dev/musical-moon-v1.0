'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AppContextType {
  name: string
}

const defaultValue: AppContextType = {
  name: ''
}

export const AppContext = createContext<{
  state: AppContextType
  setState: (value: Partial<AppContextType>) => void
  setStateWith: (func: Dispatch<SetStateAction<AppContextType>>) => void
}>({
  state: defaultValue,
  setState: () => null,
  setStateWith: () => null
});

interface Props {
  children: ReactNode
}

export default function AppContextProvider({ children }: Props) {
  const [state, setState] = useState<AppContextType>(defaultValue);

  return (
    <AppContext.Provider value={{
      state,
      setState: (value) => setState(data => ({...data, ...value})),
      setStateWith: (func) => setState(func),
    }}>
      {children}
    </AppContext.Provider>
  )
}
