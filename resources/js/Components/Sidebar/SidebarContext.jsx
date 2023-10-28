import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

//ini file reducer
import reducer from "./SidebarReducer";

//Ini masalahnya di sidebar provider, karena kita pake 

const initialState = {
    isSidebarOpen: false
}

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" })
    }
    return (
        <SidebarContext.Provider value = {{
            ...state,
            toggleSidebar
        }}>
            { children }
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}