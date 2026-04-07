import React from 'react'
import image1 from '../../assets/Women/women1.png'
import image2 from '../../assets/Women/women2.jpg'
import image3 from '../../assets/Women/women3.jpg'
import image4 from '../../assets/Women/women4.jpg'
import { Star } from 'lucide-react'

const ProductsData = [
    {
        id : 1,
        img : image1,
        title : "Women Ethnic",
        rating : 5.0,
        color : "white",
        aosDelay : "0",
    },{
        id : 2,
        img : image2,
        title : "Women western",
        rating : 4.5,
        color : "Red",
        aosDelay : "200",
    },{
        id : 3,
        img : image3,
        title : "Goggles",
        rating : 4.7,
        color : "brown",
        aosDelay : "400",
    },{
        id : 4,
        img : image4,
        title : "Printed T-shirt",
        rating : 4.4,
        color : "Yellow",
        aosDelay : "600",
    },{
        id : 5,
        img : image3,
        title : "Fashin T-Shirt",
        rating : 4.5,
        color : "Pink",
        aosDelay : "800",
    }  
];
function Products() {

  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-150 mx-auto'>
            <p 
            data-aos = "fade-up"
            className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 
            data-aos = "fade-up"
            className='text-3xl font-bold '>Products</h1>
            <p 
            data-aos = "fade-up"
            className='text-xs text-gray-400'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque omnis facilis dicta, beatae accusamus.
            </p>
        </div>
            {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {ProductsData.map((data)=>(
                    <div
                    data-aos = "fade-up"
                    data-aos-delay = {data.aosDelay}
                     key={data.id}>
                        <img 
                        src={data.img} 
                        alt=''
                        className='h-55 w-37.5 object-cover rounded-md '/>
                            <div>
                                <h3 
                                className='font-semibold'>
                                    {data.title}
                                </h3>
                                <p 
                                className='text-sm text-gray-600 '>
                                    {data.color}
                                </p>
                            <div 
                            className='flex items-center gap-2'>
                                <Star 
                                className='text-yellow-400 w-5'/>
                                <span>
                                    {data.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products
