import React from 'react'
import image from '../../assets/Women/women2.png'
import { ShieldCheck } from "lucide-react";
import { Sandwich } from "lucide-react";
import { Truck } from "lucide-react";
const bannerItems = [
  {
    id: 1,
    title : "Quality Products",
    icon : ShieldCheck,
    bgColor : "bg-violet-100 dark:bg-voilet-400 "
  },{
    id: 2,
    title : "Fast Delivery",
    icon : Sandwich,
    bgColor : "bg-orange-100 dark:bg-orange-400 "
  },{
    id: 3,
    title : "Easy Payment method",
    icon : Truck,
    bgColor : "bg-green-100 dark:bg-green-400 "
  },{
    id: 4,
    title : "Get Offers",
    icon : Truck,
    bgColor : "bg-yellow-100 dark:bg-yellow-400 "
  }
]
function Banner() {
  return (
    <div className='min-w-137.5 flex justify-center items-center m-10 py-12 sm:py-0'>
      <div className='container mx-10'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div dar-aos="zoom-in">
                <img 
                className='max-w-100 h-87.5 w-full mx-auto rounded-md drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                src={image} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% Off</h1>
                <p className='text-sm text-gray-500 tracking-wide leading-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi voluptate.
                </p>
                <div className='flex flex-col gap-4'>
                  {
                    bannerItems.map((data)=>{
                      const Icon = data.icon
                      return(
                      <div 
                      key={data.id}
                      data-aos ="fade-up" 
                      className=' flex items-center gap-4'>
                        <Icon className= {`text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 ${data.bgColor}`} />
                        <p >{data.title}</p>
                      </div>
                    )})
                  }
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
