const LocationDetails = ()=>{
    return (
        <div >
            <section className="mb-5">
                <h2 className="mb-2">1. Step2: Location & Address</h2>
                <div className="flex flex-col  gap-5">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="" className="mb-2">Street Address</label>
                        <input
                        type="text"
                         placeholder="eg. Gurukul Hostel For Girls"
                         className="
                            border
                           border-gray-500
                            px-3 
                            py
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
                         placeholder="eg. Gurukul Hostel For Girls"
                         className="
                            border
                           border-gray-500
                            px-3 
                            py
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
                            placeholder="eg. Gurukul Hostel For Girls"
                            className="
                            border
                           border-gray-500
                            px-3 
                            py
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
                            placeholder="eg. Gurukul Hostel For Girls"
                            className="
                            border
                           border-gray-500
                            px-3 
                            py
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
                            placeholder="eg. Gurukul Hostel For Girls"
                            className="
                            border
                           border-gray-500
                            px-3 
                            py
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
                            placeholder="eg. Gurukul Hostel For Girls"
                            className="
                            border
                           border-gray-500
                            px-3 
                            py
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