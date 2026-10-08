import logo from '../../../../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';
const Nav = ()=> {
    return (
        <div className="w-full shadow-brand-sm flex items-center justify-between pr-20 font-semibold">
            <div className='flex items-center gap-20'>
              <img src={logo} alt="logo image" className='h-8 sm:h-15'/>
             <div>
             <NavLink>Home</NavLink>
             </div>
           </div>

          <div className='flex items-center gap-2'>
              <Search  className='h-4'/>
              <NavLink className='border border-gray-300 text-sm px-3 py-1.5 rounded-sm shadow-sm'>Login</NavLink>
              <NavLink className='bg-brand-primary text-white text-sm px-3 py-1.5 rounded-sm shadow-md'>Sign Up</NavLink>
          </div>
        </div>
    )


}

export default Nav;