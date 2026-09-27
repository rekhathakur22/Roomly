import {useContext} from 'react';
import {PropertyFormContext} from "../../context/PropertyUploadContext"

const  Varification = ()=>{
    const {formData,setFormData} = useContext(PropertyFormContext);
    const handleChange = (e)=> {
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    return (
        <div>
            <section className="mb-5 text-sm">
                <h2 className="mb-2">1. Step3: Owner Details</h2>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="" className="mb-2">Full Name</label>
                        <input
                         type="text"
                         name='fullName'
                         value={formData.fullName}
                         onChange={handleChange}
                         placeholder="eg. Gurukul Hostel For Girls"
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
                         <label htmlFor="" className="mb-2">Email</label>
                         <input
                         type="email"
                         name='email'
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="eg. Gurukul Hostel For Girls"
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

                    <div className="flex  flex-1 flex-col"> 
                        <div className="flex flex-1 flex-col mb-2">
                            <label htmlFor="" className="mb-2">Contact Number</label>
                            <input
                            type="text"
                            name='contactNumber'
                            value={formData.contactNumber}
                            onChange={handleChange}
                            placeholder="eg. Gurukul Hostel For Girls"
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

export default Varification;