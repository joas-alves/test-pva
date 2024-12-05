import { IServicePage } from "@/cms-models/service";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ServicesContextType {
  services: IServicePage[]; 
  setServices: React.Dispatch<React.SetStateAction<IServicePage[]>>;
}
const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const useServicesContext = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServicesContext must be used within a ServicesProvider");
  }
  return context;
};

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({ children }) => {
  const [services, setServices] = useState<IServicePage[]>([]);

  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
