import React, { useState } from 'react'
import Iphone1 from "@assets/images/products/iphone-1.webp"
import Iphone2 from "@assets/images/products/iphone-2.webp"
import Iphone3 from "@assets/images/products/iphone-3.webp"
import RedStar from "@assets/images/icons/red-star.png"
import Heart from "@assets/images/icons/heart.png"
import Arrow from "@assets/images/arrow-right.svg"
import CartIcon from "@assets/images/icons/cart.png"
const DetailedProduct = () => {
  const [selectedPreview, setSelectedPreview] = useState<any>(Iphone1)
  return (
    <div className='flex flex-col md:grid grid-cols-6 h-screen'>
      <div className="hidden md:block col-span-4 border-0 md:border-l-2 border-[#515151] ">
        <div className={`bg-slate-500 h-full bg-cover bg-no-repeat `}
          style={{ backgroundImage: `url(${selectedPreview})` }}>
          <div className="relative z-[1]">
            <div className="absolute top-0 p-5">
              <div className="rounded-xl mb-4" role="button" onClick={() => { setSelectedPreview(Iphone1) }}>
                <img src={Iphone1} className="rounded-md" alt="" height={'100px'} width={'100px'} />
              </div>
              <div className="rounded-xl mb-4" role="button" onClick={() => { setSelectedPreview(Iphone2) }}>
                <img src={Iphone2} className="rounded-md" alt="" height={'100px'} width={'100px'} />
              </div>
              <div className="rounded-xl mb-4" role="button" onClick={() => { setSelectedPreview(Iphone3) }}>
                <img src={Iphone3} className="rounded-md" alt="" height={'100px'} width={'100px'} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <img src={selectedPreview} className="rounded-md" alt="" />
      </div>

      <div className="col-span-2  bg-gradient-to-b from-dark via-black to-dark p-5 border-0 md:border-x-[2px] border-[#515151]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[30px] xl:text-[40px] text-white-500">IPhone 16 Pro Max</div>
          <div className="flex items-center flex-col">
            <img src={Heart} alt="" className='h-[30px]' />
            <div className="text-[10px] text-center mt-2">
              Add to Wishlist
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src={RedStar} alt="" className='h-[30px]' />
          <img src={RedStar} alt="" className='h-[30px]' />
          <img src={RedStar} alt="" className='h-[30px]' />
          <img src={RedStar} alt="" className='h-[30px]' />
          <img src={RedStar} alt="" className='h-[30px]' />
          <div className="ms-3 text-[20px] xl:text-[30px]">(4,921)</div>
        </div>
        <div className="flex gap-2 items-start lg:items-center flex-col xl:flex-row">
          <div className="text-[40px] text-green-500 font-bold">$ 1,200.55</div>
          <div className="text-white-500 font-bold border-2 p-1 text-[10px] text-orange-500 border-orange-500 rounded-lg">40% OFF LIMITED ONLY!</div>
        </div>
        <div className="mt-4">
          The iPhone 16 Pro brings several notable upgrades while maintaining a familiar design.
          It features a larger 6.3-inch Super Retina XDR display with slimmer bezels, an Always-On display, and a 120Hz refresh rate.
          The display is also protected by second-generation Ceramic Shield, which is twice as tough as previous versions.
        </div>
        <div className="border-[#515151] border-0 md:border-[1px] my-3"></div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className='me-5'>
            <div className="font-bold">Available Colors </div>
            <div className="flex gap-2 mt-2">
              <div className="rounded-full p-5 bg-green-600"></div>
              <div className="rounded-full p-5 bg-yellow-600"></div>
              <div className="rounded-full p-5 bg-blue-600"></div>
              <div className="rounded-full p-5 bg-pink-600"></div>
              <div className="rounded-full p-5 bg-orange-600"></div>
            </div>
          </div>
          <div className="">
            <div className="font-bold">Sizes </div>
            <div className="flex gap-2 mt-2">
              <div className="font-bold border-2 rounded-full w-[35px] h-[35px] flex items-center justify-center">S</div>
              <div className="font-bold border-2 rounded-full w-[35px] h-[35px] flex items-center justify-center">M</div>
              <div className="font-bold border-2 rounded-full w-[35px] h-[35px] flex items-center justify-center">LG</div>
              <div className="font-bold border-2 rounded-full w-[35px] h-[35px] flex items-center justify-center">XL</div>
            </div>
          </div>
        </div>
        <div className="border-[#515151] border-0 md:border-[1px] my-5"></div>
        <div className="font-bold">Comments (112) </div>
        <div className="flex gap-2 mt-4">
          <div className="rounded-full h-10 w-10 bg-gray-600"></div>
          <div className="">
            <div className="font-bold">John Doe</div>
            <div className="text-sm text-[#ccc]">October 13, 2022</div>
            <div className="italic">"I love the new design!"</div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="rounded-full h-10 w-10 bg-gray-600"></div>
          <div className="">
            <div className="font-bold">Taylor Swift</div>
            <div className="text-sm text-[#ccc]">October 13, 2022</div>
            <div className="italic">"Please come to my 1989 World Tour!"</div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <input type="checkbox" />
          <div className="ms-2">Use my coin wallet as payment method and earn points. </div>
        </div>
        <div className="flex gap-3 items-center justify-center flex-col xl:flex-row">
          <div className="flex items-center justify-center mt-4">
            <button className='px-5 py-2 bg-[#CA323D] rounded-lg text-[20px] flex gap-2 items-center'>
              <img src={CartIcon} alt="" />
              Add to Cart
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className='px-5 py-2 bg-blue-500 rounded-lg text-[20px]'>
              <div className="flex items-center justify-center">
                Buy Now
                <img src={Arrow} alt="" className='ms-1' height={'15px'} width={'15px'} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedProduct