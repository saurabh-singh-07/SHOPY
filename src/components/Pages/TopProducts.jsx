import React from 'react'
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

    },{
        id: 4,
        img: images4,
        title: "Casual Wear",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur neque itaque. Nesciunt nemo quisquam eius quia voluptate quaerat ducimus ipsam harum beatae, possimus, hic in? Unde suscipit inventore aliquid?",

    },
]
function TopProducts() {
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-10 '>
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
        <div>
            {
                ProductsData.map(()=>(
                    <div>

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
