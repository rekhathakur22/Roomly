import PropertyWizard from "./features/owner/property_upload/components/PropertyWizard"
import PropertyFormProvider from "./features/owner/property_upload/context/PropertyUploadContext"
function App() {
 
  return (
   <PropertyFormProvider>
      <PropertyWizard />
   </PropertyFormProvider>
  )
}

export default App
