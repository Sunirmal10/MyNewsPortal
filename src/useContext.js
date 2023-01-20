import React, {createContext} from "react";


const NewsContext = createContext();

const NewsProvider = ({children})=>{

const food = "apple"

    return(
        <NewsContext.Provider value={{food}}>
        {children}
        </NewsContext.Provider>
    )
}

export {NewsContext, NewsProvider};