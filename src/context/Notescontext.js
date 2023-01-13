import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/notesreducer'

const notecontext = createContext();
const getlocalstorage = () => {
    let lists = localStorage.getItem('list');
    if (lists) {
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}
const intialstate = {
    alldata: getlocalstorage(),
    notesdata: {
        name: "",
        texts: "",
    }
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);
    const setinput = (event) => {
        const { name, value } = event;
        return (
            dispatch({
                type: "setdata",
                payload: {
                    names: name,
                    values: value,
                },
            })
        )
    }
    const adddata = () => {
        return (
            dispatch({
                type: "addnote",
            })
        )
    }
    const removedata = (id) => {
        return (
            dispatch({
                type: "removenote",
                payload: id,
            })
        )
    }
    const clearall = () => {
        return (
            dispatch({
                type: "clearallnote",
            })
        )
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(state.alldata));
    }, [state.alldata])
    return (
        <notecontext.Provider value={{ ...state, setinput, adddata, removedata, clearall }}>
            {children}
        </notecontext.Provider>
    )
}
const useNotesContext = () => {
    return useContext(notecontext);
}

export { notecontext, useNotesContext, AppProvider };