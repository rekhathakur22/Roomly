import { useContext } from "react";
import { PropertyFormContext } from "../../context/PropertyUploadContext";
const BasicDetails = ()=>{
    const {formData,setFormData} = useContext(PropertyFormContext);

    // title handler
    const handleChange = (e)=>{
        console.log(e.target);
        const {name,value}=e.target;
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }
    return (
        <div className="text-sm">
            {/* basic details */}
            <section className="mb-5">
                <h2 className="mb-2">1. Step1: Basic Details</h2>
                <div className="flex flex-col gap-4 md:flex md:gap-5">
                    <div className="flex flex-1 flex-col">
                        <label className="mb-2">Property Title</label>
                        <textarea
                         name="title"
                         value={formData.title}
                         onChange={handleChange}
                         placeholder="eg. Gurukul Hostel For Girls"
                         className="
                            border
                           border-gray-500
                            h-15 px-3 
                            py-2 
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
        
                            "
                         />
                    </div>
                    <div className="flex flex-1 flex-col">
                         <label htmlFor="" className="mb-2">Property Type</label>
                        <select 
                         name="propertyType"
                         value={FormDataEvent.propertyType}
                         onChange={handleChange}
                         className="
                            border
                           border-gray-500 
                            p-1
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                        >
                            <option value="Single Room" >Single Room</option>
                            <option value="Shared Room" >Shared Room</option>
                            <option value="Triple Sharing Room" >Triple Sharing Room</option>
                            <option value="Apartment" >Apartment</option>
                        </select>
                    </div>
                    <div className="flex  flex-1 flex-col"> 
                        <label htmlFor="" className="mb-2">Number of Guests</label>
                        <div>
                            <button 
                            type="button"
                             className="
                            border
                            border-r-none
                           border-gray-500 
                            rounded-sm
                            rounded-r-none
                            px-2
                            focus:outline
                            focus:outline-brand-primary 
                            "
                            >-</button>
                            <button
                             type="button" 
                              className="
                            border
                           border-gray-500 
                            rounded-sm
                            rounded-l-none
                            px-2
                            focus:outline
                            focus:outline-brand-primary 
                            "
                            >+</button>
                            <span className="ml-2">2 Guests</span>
                        </div>
                    </div>
                </div>
            </section>

       {/* pricing and availability */}
            <section className="flex-1">
                <h2 className="mb-2" >2. Pricing & Availability</h2>
                <div className="flex flex-col gap-4 md:flex-row md:gap-3">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="mb-2">Monthly Rent ($)</label>
                        <input 
                        type="number"
                        placeholder="eg. 5000" 
                         className="
                             border
                           border-gray-500 
                             p-1
                             rounded-sm
                             focus:outline
                             focus:outline-brand-primary 
                            "
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="mb-2">Security Deposite ($)</label>
                        <input 
                        type="number" 
                        placeholder="eg. 5000"
                         className="
                            border
                           border-gray-500 
                            p-1
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="mb-2">Available From</label>
                        <input
                         type="date" 
                          className="
                            border
                           border-gray-500 
                            p-1
                            rounded-sm
                            focus:outline
                            focus:outline-brand-primary 
                            "
                        />
                    </div>
                </div>
                
            </section>
           
            {/* Amenities & Rules */}

            <section className="mt-5">
                <h2 className="mb-2">4. Amenities & Rules</h2>
                <div className="flex flex-wrap gap-3">
                    <button
                     className="
                            bg-gray-300
                            border
                           border-gray-500 
                            px-3 py-1.5
                            rounded-sm
                            "
                    >
                     WiFi
                    </button>
                    <button
                     className="
                            bg-gray-300
                            border
                           border-gray-500 
                            px-2
                            rounded-sm
                            "
                    >
                        24Hr Electricity
                    </button>
                    <button
                    className="
                            bg-gray-300
                            border
                           border-gray-500 
                            px-2
                            rounded-sm
                            "
                    >
                        Parking
                    </button>
                </div>
            </section>

        </div>
    )
}

export default BasicDetails;