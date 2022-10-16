import React from "react";
import { createContext, useState, useContext} from "react";

const MainContext = createContext();
export default MainContext;

export const MainProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState();
    const [listType, setListType] = useState();
    return(
        <MainContext.Provider value={{allPokemon, setAllPokemon, listType, setListType}}>
            {children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext)