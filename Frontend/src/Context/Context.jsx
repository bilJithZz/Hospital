import { createContext, useState } from "react";


export const DoctorContext = createContext();


export const DoctorProvider = ({ children }) => {
  const [state, setState] = useState(null); 


  const value = { state, setState };

  return (
    <DoctorContext.Provider value={value}>
      {children} 
    </DoctorContext.Provider>
  );
};
