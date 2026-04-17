import React from 'react'
import images1 from '../../assets/shirt/shirt.png'
import images2 from '../../assets/shirt/shirt2.png'
import images3 from '../../assets/shirt/shirt3.png'
import { Star } from 'lucide-react'


const ProductsData = [
    {
        id: 1,
        img: images1,
        title: "Casual Wear",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur neque itaque. Nesciunt nemo quisquam eius quia voluptate quaerat ducimus ipsam harum beatae, possimus, hic in? Unde suscipit inventore aliquid?",

    },{
        id: 2,
        img: images2,
        title: "Printed shirt",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur neque itaque. Nesciunt nemo quisquam eius quia voluptate quaerat ducimus ipsam harum beatae, possimus, hic in? Unde suscipit inventore aliquid?",

    },{
        id: 3,
        img: images3,
        title: "Women shirt",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur neque itaque. Nesciunt nemo quisquam eius quia voluptate quaerat ducimus ipsam harum beatae, possimus, hic in? Unde suscipit inventore aliquid?",

    }
]
function TopProducts() {
  return (
    <div className='flex justify-center'>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-25 '>
            <p
            data-aos='fade-up'
            className='text-sm text-primary'>
                Top Rated Products for you 
            </p>
            <h1 
            data-aos="fade-up "
            className='text-3xl font-bold'>
                Best Products
            </h1>
            <p 
            data-aos="fade-up"
            className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minima accusantium eos aut culpa!
            </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {
                ProductsData.map((data)=>(
                    <div 
                    key={data.id}
                    data-aos= "zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-75'>
                        <div
                        className='h-25'>
                            <img 
                            className='max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md '
                            src={data.img} 
                            alt=''/>
                        </div>
                        <div className='p-4 text-center '>
                            <div className='w-full flex items-center justify-center gap-1'>
                                <Star className='text-yellow-500'/>
                                <Star className='text-yellow-500'/>
                                <Star className='text-yellow-500'/>
                                <Star className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl dark:text-white font-bold'>{data.title}</h1>
                            <p className='text-xs text-gray-500 group-hover:text-white/80 duration-300 line-clamp-2'>{data.description}</p>
                            <button 
                            // onClick={handleOrderPopup}
                            className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full group-hover:bg-white my-2 group-hover:text-primary'>
                                Order Now
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
