import { useContext } from "react";
import { PropertyFormContext } from "../context/PropertyUploadContext";
const NavigationButtons = () => {
    const {currentStep,handleNext,handleBack} = useContext(PropertyFormContext);
  return (
    <div className="flex flex-wrap gap-3 mt-5 justify-end text-sm">
        {currentStep < 4 && 
        <div
         className="bg-brand-primary text-white px-6 py-2 sm:px-10 sm:py-1.5"
        >
            <button type="button" onClick={handleNext}>Next</button>
        </div>
        }

        {currentStep > 1 &&
         <div  className="bg-brand-primary text-white px-6 py-2 sm:px-10 sm:py-1.5">
            <button type="button" onClick={handleBack}>Back</button>
        </div>
        }

        {currentStep == 4 && 
        <div  className="bg-brand-primary text-white px-6 py-2 sm:px-10 sm:py-1.5">
            <button type="button" >Submit</button>
        </div>
        }

        <div  className="bg-brand-primary text-white px-6 py-2 sm:px-10 sm:py-1.5">
            <button type="button" >Cancle</button>
        </div>
    </div>
  )
}
export default NavigationButtons;