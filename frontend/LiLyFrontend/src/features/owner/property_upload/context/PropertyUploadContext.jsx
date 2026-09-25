import { createContext ,useState } from "react";

export const PropertyFormContext = createContext();

const PropertyFormProvider = ({children})=>{
    const [currentStep,setCurrentStep] = useState(1);

    const handleNext = ()=>{
    setCurrentStep((prev)=> prev+1);
   }

   const handleBack = () =>{
    setCurrentStep((prev)=>prev-1);
   }

   const [formData,setFormData] = useState({
     title: "",
     propertyType: "Single Room",
     guests: 2,
      monthlyRent: "",
     securityDeposit: "",
     availableFrom: "",

     streetAddress:"",
     Apartment:"",
     state:"",
     city:"",
     pincode:"",
     country:"",

     fullName:"",
     email:"",
     contactNumber:"",

     photos:[]
   })
    return (
        <PropertyFormContext.Provider value={{ 
            currentStep,
            setCurrentStep,
            handleNext,
            handleBack,
            formData,
            setFormData
            }}>
            {children}
        </PropertyFormContext.Provider>
    )
}

export default PropertyFormProvider;