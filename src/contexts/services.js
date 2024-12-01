import React, { useState, createContext, useContext} from "react";

const ServicesContext = createContext(null);

export const useServicesContext = () => {
        return useContext(ServicesContext);
};

export const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([]);

    return (
        <ServicesContext.Provider value={{ services, setServices }}>
            {children}
        </ServicesContext.Provider>
    );
}
