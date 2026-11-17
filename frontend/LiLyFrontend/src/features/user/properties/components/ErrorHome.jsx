
import { RefreshCw } from 'lucide-react';
const ErrorHome = ({fetchDefaultProperties})=>{
   return (
    <div className='flex flex-col w-full justify-center items-center h-50 bg-gray-800/5 rounded-md mt-5'>
        <h1 className='text-2xl text-black font-semibold'>
            Oops! Something went wrong on our end.
        </h1>
        <p className='text-[15px]'>We couldn’t reach the server. Give it another shot?</p>

        <button 
        type="button"
        className='cursor-pointer mt-6'
        onClick={()=>fetchDefaultProperties()}
        >
            <RefreshCw className='w-10 h-10'/>
        </button>
    </div>
   )
}

export default ErrorHome;