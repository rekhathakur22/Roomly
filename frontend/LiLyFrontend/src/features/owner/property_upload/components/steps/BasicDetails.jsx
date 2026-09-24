const BasicDetails = ()=>{
    return (
        <div className="">
            <section className="mb-5">
                <h2 className="mb-2">1. Step1: Basic Details</h2>
                <div className="flex gap-5">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="" className="mb-2">Property Title</label>
                        <textarea
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

            <div className="flex mb-2">
            <section className="flex-1">
                <h2 className="mb-2" >2. Pricing & Availability</h2>
                <div className="flex gap-3">
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
            <section className="flex-1">
                <h2>3. Photos & Media</h2>
                <div>

                </div>
            </section>
            </div>

            <section>
                <h2 className="mb-2">4. Amenities & Rules</h2>
                <div className="flex gap-3">
                    <button
                     className="
                            bg-gray-300
                            border
                           border-gray-500 
                            px-2
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