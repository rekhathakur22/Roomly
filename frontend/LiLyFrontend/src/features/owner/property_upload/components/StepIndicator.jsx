import { useContext } from "react";
import { PropertyFormContext } from "../context/PropertyUploadContext";


const StepIndicator = ()=>{
  const {currentStep} = useContext(PropertyFormContext);
    const steps = [1,2,3,4];
    return (
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {steps.map((step) => (
        <div
          key={step}
          className={`h-1 sm:h-1.5 flex-1 rounded-full ${
            step <= currentStep
              ? "bg-brand-primary"
              : "bg-gray-200"
          }`}
        />
      ))}
           
        </div>
    )
}

export default StepIndicator;


