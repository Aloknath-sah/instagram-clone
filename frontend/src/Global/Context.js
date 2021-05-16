import React, {createContext, useState} from 'react';
export const ContextProvider = createContext();

const Context = (props) => {
    const [model, setModel] = useState(false)
    const openModel = () => {
        setModel(true)
    }
    return (
        <ContextProvider.Provider value={{model, openModel}}>
            {props.children}
        </ContextProvider.Provider>
    );
}

export default Context;
