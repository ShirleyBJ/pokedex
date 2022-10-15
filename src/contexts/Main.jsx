import React from "react";
import { createContext, useState, useContext} from "react";

const MainContext = createContext();
export default MainContext;

export const MainProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState();

    return(
        <MainContext.Provider value={{allPokemon, setAllPokemon}}>
            {children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext)