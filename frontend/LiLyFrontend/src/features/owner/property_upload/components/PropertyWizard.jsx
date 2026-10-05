import { useContext } from "react";
import { PropertyFormContext } from "../context/PropertyUploadContext";
import StepIndicator  from "./StepIndicator";
import BasicDetails from "./steps/BasicDetails";
import Varification from "./steps/Varification";
import LocationDetails from "./steps/LocationDetails";
import NavigationButtons from "./NavigationButtons";
import PhotosVideos from "./steps/PhotosVideos";
const PropertyWizard = ()=> {
   const {currentStep,formData} = useContext(PropertyFormContext);

     const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
           const response = await fetch("http://localhost:4000/owner/properties",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(formData)
           })

           const result = await response.json();
           console.log("SERVER RESPONSE:", result);
        }
       catch(error){
             console.error("SUBMIT ERROR:", error);
       }
     }
    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 font-roboto" >
            <h1 className=" text-2xl sm:text-3xl font-extrabold text-brand-primary mb-5">List Your Property</h1>

            <StepIndicator/>

            {currentStep === 1 && <BasicDetails />}

            {currentStep === 2 && <LocationDetails />}

            {currentStep === 3 && <Varification />}

            {currentStep === 4 && <PhotosVideos />}


        <NavigationButtons handleSubmit={handleSubmit}/>

        </div>
    )

}

export default PropertyWizard;