const  Varification = ()=>{
    return (
        <div>
            <section className="mb-5">
                <h2 className="mb-2">1. Step3: Owner Details</h2>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="" className="mb-2">Full Name</label>
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
                         <label htmlFor="" className="mb-2">Email</label>
                         <input
                         type="email"
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

                    <div className="flex  flex-1 flex-col"> 
                        <div className="flex flex-1 flex-col mb-2">
                            <label htmlFor="" className="mb-2">Contact Number</label>
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

export default Varification;