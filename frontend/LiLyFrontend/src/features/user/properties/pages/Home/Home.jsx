import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import PropertyFilters from "../../components/PropertyFilters";

const initialSearchData = {
  location:"",
  propertyType:"",
  budget:"",
  moveInData:""
}
const Home = () =>{
  const [searchData,setSearchData] = useState(initialSearchData);
  const handleSearchChange = (e)=>{
   const {name,value} = e.target;
   setSearchData((prev)=>({
    ...prev,
    [name]:value,
   }))
  }
 return (
    <>
    <Nav></Nav>
    <Hero
     searchData={searchData}
     onSearchChange = {handleSearchChange}
    ></Hero>
    {/* Property listing section */}
      <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">

          {/* Left sidebar */}
          {/* Left sidebar */}
<           aside className="hidden lg:block">
            <PropertyFilters />
            </aside>
        

          {/* Right side: property cards will go here */}
          <section className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900">
              120+ Properties found
            </h2>

            {/* We will add property cards here next */}
          </section>

        </div>
      </main>
    </>
 )
    
}

export default Home;