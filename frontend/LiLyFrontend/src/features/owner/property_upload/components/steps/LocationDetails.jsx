import {useContext} from 'react'
import {PropertyFormContext} from "../../context/PropertyUploadContext"

const LocationDetails = ()=>{
    const {formData,setFormData} = useContext(PropertyFormContext);
      const handleChange = (e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }
    return (
        <div >
            <section className="mb-5 text-sm">
                <h2 className="mb-2">1. Step2: Location & Address</h2>
                <div className="flex flex-col  gap-5">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="" className="mb-2">Street Address</label>
                        
                        <input
                         type="text"
                         placeholder="e.g. 123 MG Road"
                         name='streetAddress'
                         value={formData.streetAddress}
                         onChange={handleChange}
                         className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
        
                            "
                         />
                    </div>
                    <div className="flex flex-1 flex-col">
                         <label htmlFor="" className="mb-2">Apartment( Optional )</label>
                         <input
                         type="text"
                         name='Apartment'
                         value={formData.Apartment}
                          onChange={handleChange}
                         placeholder="e.g. Flat 204, Sunshine Apartments"
                         className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
        
                            "
                         />
                    </div>

                    <div className="flex flex-1 flex-col"> 
                        <div className="flex flex-1 flex-col mb-2">
                            <label htmlFor="" className="mb-2">State</label>
                            <input
                            type="text"
                            name='state'
                            value={formData.state}
                             onChange={handleChange}
                            placeholder="eg. Madhya Pradesh"
                            className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                         />
                        </div>
                        <div className="flex flex-1 flex-col mb-2">
                             <label htmlFor="" className="mb-2">City</label>
                               <input
                            type="text"
                            name='city'
                            value={formData.city}
                             onChange={handleChange}
                            placeholder="eg. Indore"
                            className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                         />
                        </div>
                        <div className="flex flex-1 flex-col mb-2">
                             <label htmlFor="" className="mb-2">Pin Code</label>
                              <input
                            type="text"
                            name='pincode'
                            value={formData.pincode}
                             onChange={handleChange}
                            placeholder="eg.480991"
                            className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                         />
                        </div>
                        <div className="flex flex-1 flex-col mb-2">
                             <label htmlFor="" className="mb-2">Country</label>
                              <input
                            type="text"
                            name='country'
                            value={formData.country}
                             onChange={handleChange}
                            placeholder="eg. India"
                            className="
                            border
                           border-gray-500
                            px-4 
                            py-2
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                         />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LocationDetails ;