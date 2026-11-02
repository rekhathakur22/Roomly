import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import { Star } from 'lucide-react';
const PropertyCard = ({response}) =>{
    const rating = [1,2,3,4,5];
    const random_rating = 3.5;
 return (
    <div className="w-full rounded-xl overflow-hidden flex flex-col drop-shadow-md bg-white ">
      <div className='w-full relative'>
        <img 
        src={response.photos[0].url} 
        alt="main image"
        className="
        w-full
        h-40
        object-cover
        "
         />
          <div className='absolute
          top-3
          right-3
          cursor-pointer
          drop-shadow-md
          bg-black/50
          rounded-full
          p-1.5
          '>
            <Heart
            className='text-white'
            />
          </div>
        
      </div>

      <div className='flex justify-between mt-3 mx-2'>
          <div>
             <h1 className='font-bold'>{response.title}</h1>
             <div className='flex items-center gap-0.5 mt-1.5'>{
               rating.map((item)=>{
                const filled = random_rating >= item;
                const half = !filled && random_rating >= item - 0.5;
                return (
                  <div key={item} className="relative">
                     <Star className="w-4 h-4 text-gray-300" />
  
                     {filled && (
                       <Star className="absolute inset-0 w-4 h-4 fill-yellow-400 text-yellow-400" />
                       )}

                     {half && (
                       <div className="absolute inset-0 w-1/2 overflow-hidden">
                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                       </div>
                     )}
                   </div>
                           
                         )
                        })
              }
              <span className='text-sm ml-1 font-bold'>{random_rating}</span>
              </div>
      </div>
          <div className='flex flex-col gap-0'>
             <h1 className='font-bold flex justify-center items-center leading-none'><IndianRupee className='w-3'/> {response.monthlyRent}</h1>
             <span className='text-sm leading-none text-ui-text-dark'>/- month</span>
          </div>
      </div>
      <div className='flex gap-2 mx-1  items-center'><MapPin className='w-3'/> <span className='text-sm'>{response.streetAddress}, {response.city}</span></div>
      <div  className='flex mx-2 gap-2 text-sm text-ui-text-dark mt-2'>
        {response.amenities?.slice(0,3).map((item)=>(<div className='bg-gray-200/80 text-[13px] px-1.5 py-0.5 rounded-sm'><h1>{item}</h1></div>))}
      </div>
      <div className='flex justify-center items-center drop-shadow-md bg-brand-primary/20 rounded-full mx-6 py-1.5 mt-4 mb-4 text-brand-primary hover:text-white hover:bg-brand-primary '>
        <button className='text-sm font-semibold cursor-pointer'>View Details</button>
      </div>
    </div>
 )
}

export default PropertyCard;