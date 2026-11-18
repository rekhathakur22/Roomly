import { useState , useEffect} from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import PropertyFilters from "../../components/PropertyFilters";
import PropertyCard from "../../components/PropertyCard";
import Spinner from "../../components/Spinner";
import ErrorHome from "../../components/ErrorHome";

const initialSearchData = {
  location:"",
  propertyType:"",
  budget:"",
  moveInDate:""
}
const Home = () =>{
  // states
  const [searchData,setSearchData] = useState(initialSearchData);
  const [properties, setProperties] = useState([]);
  const [loading,setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredProperties,setFilteredProp] = useState([]);
  const [error,setError] = useState("");
  


  // fetch random properties
  useEffect(()=>{
    fetchDefaultProperties();
  },[]);

  const fetchDefaultProperties = async ()=>{
    try{
       setLoading(true);
       const response = await fetch('https://roomly-hew8.onrender.com/user/properties/');
       if (!response.ok) {
  throw new Error(`Server Error: ${response.status}`);
}

       const result = await response.json();
       setProperties(result);
       setFilteredProp(result);
    }
    catch(e){
        console.log(e.message);
        setError(e.message);
    }
    finally{
      setLoading(false);
    }

  }

  // when input changes
  const handleSearchChange = (e)=>{
   const {name,value} = e.target;
   setSearchData((prev)=>({
    ...prev,
    [name]:value,
   }))
  }

  // get the data from backend 
  const handleSearch = async() =>{
    try{
        setHasSearched(true);
        setLoading(true);
        const params = new URLSearchParams();

        Object.entries(searchData).forEach(([key,value])=>{
           if(value !== ""){
            params.append(key,value);
           }
         })
        const result = await fetch(`https://roomly-hew8.onrender.com/user/properties/search?${params.toString()}`);
        const data = await result.json();
        console.log('handleSearch',data);
        setFilteredProp(data);
    }
    catch(e){
      console.log('error at handleSearch',e.message);
      setProperties([]);
    }
    finally{
      setLoading(false);
    }

  }
  
  // filter handling
  const handleFilters = (data) =>{
    console.log(data);
    const filters =  properties.filter((property)=>{
     // property ka type match karna he 
     const typeMatch = data.propertyTypes.length === 0 || 
                      data.propertyTypes.includes(property.propertyType);

     // budget match 
     const budgetMatch =  Number(property.monthlyRent) >= data.minBudget &&
                         Number(property.monthlyRent) <= data.maxBudget 

    // room type
    const room = {
       "Single Occupancy":1,
       "Double Occupancy":2,
       "Triple Occupancy":3
    } 
    const roomTypeMatch = data.roomTypes.length === 0 || 
              data.roomTypes.some((type)=>
                room[type]=== property.guests
                );
    
      const amenitiesMatch = data.amenities.length === 0 || 
              data.amenities.some((amenity)=>
                property.amenities.includes(amenity)
                );
      
      
      return (typeMatch && budgetMatch && roomTypeMatch && amenitiesMatch);

    }) 
     
    setFilteredProp(filters);
  }

 return (
    <>
    <Nav></Nav>
    <Hero
     searchData={searchData}
     onSearchChange = {handleSearchChange}
     handleSearch={handleSearch}
    ></Hero>
    {/* Property listing section */}
      <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">

          {/* Left sidebar */}
          {/* Left sidebar */}
<           aside className="hidden lg:block">
            <PropertyFilters onFilterChange={handleFilters}/>
            </aside>
        

          {/* Right side: property cards will go here */}
          <section className="min-w-0">
          
            {!hasSearched && <h2 className="text-xl font-bold text-gray-900">
               Explore Properties
            </h2>}
            {hasSearched && filteredProperties.length > 0 && <h2 className="text-xl font-bold text-gray-900">
               {filteredProperties.length} Properties found
            </h2>}
            {hasSearched && filteredProperties.length === 0 && <h2 className="text-xl font-bold text-gray-900">
               No Matching records found
            </h2>}



            {/* We will add property cards here next */}
            {loading ? <Spinner/> : properties.length > 0 ?
             (<div 
             className="
             mt-10
             grid 
             grid-cols-1
             sm:grid-cols-2
             lg:grid-cols-3
        
             gap-6
             ">
              {
                filteredProperties.map((item)=><PropertyCard key={item._id} response={item}></PropertyCard>) 
              }
            </div>):
             error.trim().length === 0 ? <h1>no matching data found</h1> : <ErrorHome fetchDefaultProperties={fetchDefaultProperties}/>
            }
            
          </section>

        </div>
      </main>
    </>
 )
    
}

export default Home;