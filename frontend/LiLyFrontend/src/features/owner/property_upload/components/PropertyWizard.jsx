import { useContext } from "react";
import { PropertyFormContext } from "../context/PropertyUploadContext";
import StepIndicator  from "./StepIndicator";
import BasicDetails from "./steps/BasicDetails";
import Varification from "./steps/Varification";
import LocationDetails from "./steps/LocationDetails";
import NavigationButtons from "./NavigationButtons";
import PhotosVideos from "./steps/PhotosVideos";
const PropertyWizard = ()=>{
   const {currentStep} = useContext(PropertyFormContext);


    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 font-roboto" >
            <h1 className=" text-2xl sm:text-3xl font-extrabold text-brand-primary mb-5">List Your Property</h1>

            <StepIndicator/>

            {currentStep === 1 && <BasicDetails />}

            {currentStep === 2 && <LocationDetails />}

            {currentStep === 3 && <Varification />}

            {currentStep === 4 && <PhotosVideos />}


        <NavigationButtons/>

        </div>
    )

}

export default PropertyWizard;