import { useState } from 'react';
import hero from '../../../../../assets/hero.jpg'
import { House , MapPin , Search,IndianRupee ,  Calendar  } from 'lucide-react';

const Hero = ({ searchData,onSearchChange}) =>{
   
   return (
      <section  className='relative min-h-[255px]'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${hero})` }} />
          {/* Light overlay for readable text */}
       
       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />

       <div className='relative px-6 pt-7 pb-8'>
         <h1 className='max-w-xl text-4xl text-slate-900 font-bold leading-tight'>
             Find Your Perfect
            <br />
              Stay with <span className="text-brand-primary">LiLy</span>
         </h1>

         <p className='mt-3 text-sm text-slate-800 md:text-base font-semibold'> Discover verified PGs, hostels and rental rooms near your
          college or workplace.</p>

          
        {/* Search bar */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-lg md:flex-row md:items-center">

          {/* Location */}
          <div className="flex min-w-0 flex-[1.7] items-center gap-3 rounded-lg border border-gray-200 px-3 py-3">
            <MapPin className="h-5 w-5 shrink-0 text-slate-800" />

            <input
              type="text"
              name='location'
              value={searchData.location}
              onChange={onSearchChange}
              placeholder="Enter city, area or landmark"
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </div>

           {/* Property type */}
           <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3 py-3">
              <House className="h-5 w-5 shrink-0" />

             <select
             name="propertyType"
             value={searchData.propertyType}
             onChange={onSearchChange}
             className="w-full bg-transparent text-sm outline-none"
           >
             <option value="">Property Type</option>
             <option value="PG">PG</option>
             <option value="Hostel">Hostel</option>
             <option value="Shared Apartment">Shared Apartment</option>
             <option value="Single Room">Single Room</option>
             <option value="Studio">1 RK / Studio</option>
            </select>
          </div>
          

           <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3 py-3">
            <span className="font-semibold">₹</span>
            <select
              name="budget"
              value={searchData.budget}
              onChange={onSearchChange}
              className="w-full bg-transparent text-sm outline-none"
            >
              <option value="">Select Budget</option>
              <option value="5000">Up to ₹5,000</option>
              <option value="10000">Up to ₹10,000</option>
              <option value="15000">Up to ₹15,000</option>
              <option value="20000">Up to ₹20,000</option>
            </select>
             </div>

          {/* Move-in date */}
           <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3 py-3">
              <Calendar/>
              <input
               type="date"
               name="moveInDate"
               value={searchData.moveInDate}
               onChange={onSearchChange}
               className="w-full bg-transparent text-sm outline-none"
              />
             </div>
          {/* Search button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
          </div>
       </div>


      </section>
   )
}

export default Hero;