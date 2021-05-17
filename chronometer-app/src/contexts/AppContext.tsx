import React, {createContext, ReactNode, useContext, useState} from 'react'


type AppData =  {

}

type AppProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext({} as AppData)

export function AppContextProvider( {children}:AppProviderProps ) { 

  return (
    <AppContext.Provider
      value={{
                
      }}

    >
      { children }
    </AppContext.Provider>
  )
}

/* Exportando o contexto  */
export const useApp = () => {
  return useContext(AppContext)
}