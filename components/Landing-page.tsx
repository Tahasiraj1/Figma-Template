import React from 'react'
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div>
      <div className='flex flex-col'>
        {/* Header */}
        <div className='bg-slate-400 w-full h-[88px]'></div>

        {/* Main content */}
        <div className='flex flex-col lg:flex-row items-center justify-center bg-white py-20 lg:pr-24'>
        <div className='w-full bg-white flex flex-col justify-center px-16  lg:pl-10'>
            <h1 className='text-black font-bold text-[32px] lg:text-[44px] mb-4 lg:mb-4'>
                Welcome To Our Website
            </h1>
            <p className='font-normal text-[18px] lg:text-[32px] lg:w-[571px] h-[116px] lg:h-[156px] top-[318px] left-[68px] text-gray-500 mb-0 lg:mb-20'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard
            </p>
            <button
            className='w-[190px] lg:w-[237px] h-[50px] lg:h-[66px] text-[18px] lg:text-[28px] bg-black text-white mt-0'
            >
                Contact US
            </button>
        </div>
        <Image
        src={`/figmatemplate.jpeg`}
        alt='philip-oroni-VfOGf5RWkeg-unsplash 1'
        width={400}
        height={100}
        className='w-[502px] h-[465px] top-[183px] left-[731px] p-4 lg:p-0 mt-10 lg:mt-0'
        />
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
