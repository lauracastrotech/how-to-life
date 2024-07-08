import { createContext, useContext, useState } from "react";

//Create context AuthContext
const FormContext = createContext(null);

//Create context provider AuthProvider
const FormProvider = ({children}) => {

    //initialize state isLoggedIn
    const [formStatus, setFormStatus] = useState("");
    const [stepStatus, setStepStatus] = useState(0)

    //return Provider
    return (
       <FormContext.Provider value = {{formStatus, setFormStatus, stepStatus, setStepStatus}}>
           {children}
       </FormContext.Provider>
    )
};
// Custom hook to access context in child components of parent App.jsx
const useFormContext = () => useContext(FormContext);

//Export Provider and hook
export {FormProvider, useFormContext}