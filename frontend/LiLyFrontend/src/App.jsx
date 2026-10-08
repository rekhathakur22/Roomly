import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './features/user/properties/pages/Home/Home';
import PropertyWizard from "./features/owner/property_upload/components/PropertyWizard"
import PropertyFormProvider from "./features/owner/property_upload/context/PropertyUploadContext"
function App() {
  return (
     < BrowserRouter >
     <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route
       path='/admin'
       element={
        <PropertyFormProvider>
         <PropertyWizard />
       </PropertyFormProvider>
       }
      />
     </Routes>
     </BrowserRouter>
  )
}

export default App
