import { useState , useEffect} from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import PropertyFilters from "../../components/PropertyFilters";
import PropertyCard from "../../components/PropertyCard";

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

  // fetch random properties
  useEffect(()=>{
    fetchDefaultProperties();
  },[]);

  const fetchDefaultProperties = async ()=>{
    try{
       setLoading(true);
       const response = await fetch('http://localhost:4000/user/properties/');
       const result = await response.json();
       setProperties(result);
    }
    catch(e){
        console.log(e);
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
        const result = await fetch(`http://localhost:4000/user/properties/search?${params.toString()}`);
        const data = await result.json();
        console.log('handleSearch',data);
        setProperties(data);
    }
    catch(e){
      console.log('error at handleSearch',e.message);
      setProperties([]);
    }
    finally{
      setLoading(false);
    }

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
            <PropertyFilters />
            </aside>
        

          {/* Right side: property cards will go here */}
          <section className="min-w-0">
            {!hasSearched && <h2 className="text-xl font-bold text-gray-900">
               Explore Properties
            </h2>}
            {hasSearched && properties.length > 0 && <h2 className="text-xl font-bold text-gray-900">
               {properties.length} Properties found
            </h2>}
            {hasSearched && properties.length === 0 && <h2 className="text-xl font-bold text-gray-900">
               No Matching records found
            </h2>}



            {/* We will add property cards here next */}
            {loading ? <h1>loading</h1> : properties.length > 0 ?
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
                properties.map((item)=><PropertyCard key={item._id} response={item}></PropertyCard>) 
              }
            </div>):
             <h1>no matching data found</h1>
            }
            
          </section>

        </div>
      </main>
    </>
 )
    
}

export default Home;