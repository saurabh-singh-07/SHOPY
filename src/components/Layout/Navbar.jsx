import { ArrowDown, Moon, Search, ShoppingBag, ShoppingCart, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const Menu = [
  {
    id: 1,
    name:"Home",
    link : "/#"
  },
  {
    id: 2,
    name:"Top Rated",
    link : "/services"
  },
  {
    id: 3,
    name:"Kids Wear",
    link : "/#"
  },
  {
    id: 4,
    name:"Mens Wear",
    link : "/#"
  },
  {
    id: 5,
    name: "Electronics",
    link : "/#"
  }
]
const DropdownLinks = [
  {
    id : 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id : 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id : 3,
    name: "Top Rated",
    link: "/#",
  }
]
const Navbar = () => {
  const [darkmode, setDarkmode] = useState(()=>{
    return localStorage.getItem('theme') === "dark"
  });
  useEffect(()=>{
    if(darkmode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },[darkmode])
  
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
      <div className='dark:bg-primary/40 bg-secondary/40 py-3 h-15 sm:py-2'>
        <div className='container flex justify-between items-center px-12'>
            {/* logo */}
            <div>
                <a 
                className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
                href="#">
                    <ShoppingBag/>
                    Shopy 
                </a>     
            </div>
            {/* search bar and order button */}
            <div className='flex items-center gap-4 '>
              <div className='group relative hidden md:block'>
                <input type="text" 
                placeholder='search..' 
                className='w-75 sm:w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary ' />
                <Search className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
              </div>
              <button 
              onClick ={()=> alert("This feature is currently not available")}
              className='btn-style gap-3 group'
            >
              <span className='group-hover:block hidden transition-all  duration-300 '>Order</span>
              <ShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button> 
              {/*Darkmode button  */}
                <div className='flex items-center  bg-amber-600/30 border border-amber-500/70 py-1.5 px-3 rounded-xl ' >
                  <button
                  onClick={()=>setDarkmode(!darkmode)}>
                    {
                      darkmode ? <Sun/> 
                      : <Moon/>
                    }
                  </button>
                </div>
            </div>                
        </div>
          {/* lower Navbar */}
      </div>
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-2 md:gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link}
                className='inline-block py-1 px-4 hover:text-primary duration-300'
                >{data.name}
                </a>
              </li>
            ))
          }
          <li className='group relative cursor-pointer'>
            <a href="#"
            className='flex items-center gap-0.5 py-2'>
              Tranding
              <span>
                <ArrowDown 
                className='transition-all duration-300 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-9999 hidden transition-all duration-300 group-hover:block w-38 rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data)=>(
                  <li key={data.id}>
                    <a href={data.link}
                    className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                      {data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
