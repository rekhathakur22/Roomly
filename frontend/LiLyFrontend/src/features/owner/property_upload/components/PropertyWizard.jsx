import { useState } from "react";
import StepIndicator  from "./StepIndicator";
import BasicDetails from "./steps/BasicDetails";
import Varification from "./steps/Varification";
import LocationDetails from "./steps/LocationDetails";
import NavigationButtons from "./NavigationButtons";
const PropertyWizard = ()=>{
   const [currentStep,setCurrentStep] = useState(1);

   const handleNext = ()=>{
    setCurrentStep((prev)=> prev+1);
   }

   const handleBack = () =>{
    setCurrentStep((prev)=>prev-1);
   }

    return (
        <div className="p-10" >
            <h1 className="text-2xl text-gray-800 font-serif antialiased font-semibold mb-5">List Your Property</h1>

            <StepIndicator currentStep={currentStep}/>

            {currentStep === 1 && <BasicDetails />}

            {currentStep === 2 && <LocationDetails />}

            {currentStep === 3 && <Varification />}

        <NavigationButtons
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
      />

        </div>
    )

}

export default PropertyWizard;